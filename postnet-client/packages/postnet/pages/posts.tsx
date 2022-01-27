import React, {useState, useEffect, useCallback} from 'react';

import {useAuthHeader, useAuthData, useUnauthRedirect} from "../hooks";
import {useRouter} from "next/router";
import {
    Menu,
    Layout,
    Button,
    Row,
    Card,
    Avatar,
    Typography,
    Col,
    message, List, Divider,
} from "antd";
import {
    MessageOutlined,
} from "@ant-design/icons";
import {PostsApi, PostVO, UserVO} from "../../postnet-api/src";
import NewPostModal from "../components/NewPostModal";
import ChatMessage from "../vos/ChatMessage";
import IncomingMessage from "../vos/IncomingMessage";
import useMessagingConnection from "../hooks/useMessagingConnection";
import {UserStatusVO} from "../vos/UserStatusVO";
import {Status} from "../vos/enums/Status";
import OutgoingMessage from "../vos/OutgoingMessage";
import "antd/dist/antd.css";
import PopupChat from "../components/chat/PopupChat";
import NavBar from "../components/NavBar";
import {from} from "rxjs";
import InfiniteScroll from "react-infinite-scroll-component";

type Messages = {
    [email: string]: ChatMessage[]
}

function Posts() {

    const router = useRouter();
    const authHeader = useAuthHeader();

    const [visible, setVisible] = React.useState(false);
    const [posts, setPosts] = useState<PostVO[]>([]);
    const [chatHidden, setChatHidden] = useState<boolean>(true);
    const [chatmate, setChatmate] = useState<UserVO | undefined>();
    const [onlineUsers, setOnlineUsers] = useState<UserVO[]>([]);
    const [messages, setMessages] = useState<Messages>({});
    const [lastInboundMessage, setLastInboundMessage] = useState<IncomingMessage>();
    const [login] = useAuthData();
    const redirecting = useUnauthRedirect('/login');

    const showModal = () => {
        setVisible(true);
    };

    const showChat = (user) => {
        const userVO: UserVO = {email: user.email, name: user.name}
        setChatmate(userVO);
        setChatHidden(false);
    }

    const hideChat = () => {
        setChatmate(undefined);
        setChatHidden(true);
    }

    const getUserByLogin = (email) => {
        console.log(onlineUsers)
        return onlineUsers.find(user => user.email === email);
    }

    const getChatMessages = () => {
        if (!chatmate || !messages[chatmate.email]) return [];
        return messages[chatmate.email];
    }

    useEffect(() => {
        const interval = setInterval(() => {
            loadNewPosts();
            // setPosts(prevState => newPosts.concat(prevState))
        }, 20000)

        return () => clearInterval(interval)
    }, []);


    useEffect(() => {
        if (chatHidden && lastInboundMessage) {
            const from = getUserByLogin(lastInboundMessage.sender);
            if (from) {
                showChat(from);
            }
        }
    }, [lastInboundMessage]);

    useEffect(() => {
        if (!redirecting && authHeader) {
            loadPosts();
        }
    }, []);


    const loadPosts = () => {
        const fetchData = async () => {
            let data: PostVO[] = [];
            try {
                data = (await PostsApi.getPosts(undefined, authHeader)).data;
                setPosts(data);
            } catch (error) {
                message.error("Při vyhledávání příspěvků došlo k chybě")
            }
        }
        fetchData();
    }

    const loadNewPosts = () => {
        const fetchData = async () => {
            const latestPost = posts[1];
            console.log(posts)
            let newPosts: PostVO[] = [];
            try {
                if (latestPost) {
                    newPosts = (await PostsApi.getPosts(latestPost.creationDateTime, authHeader)).data;
                } else {
                    newPosts = (await PostsApi.getPosts(undefined, authHeader)).data;
                }
                setPosts(posts.concat(newPosts))
            } catch (error) {
                message.error("Při vyhledávání příspěvků došlo k chybě")
            }
        }
        fetchData();
    }

    const loadOlderPosts = async () => {
        const latestPost = posts.at(posts.length - 1);
        let olderPosts: PostVO[];
        if (latestPost) {
            olderPosts = (await PostsApi.getOldPosts(latestPost.creationDateTime, authHeader)).data;
        } else {
            olderPosts = (await PostsApi.getPosts(undefined, authHeader)).data;
        }
        setPosts(prevState => prevState.concat(olderPosts));
    }

    const onCreate = (values: any) => {
        values.author = login
        PostsApi.createPost(values, authHeader)
            .then(() => {
                message.success('Příspěvek úspěšně zveřejněn')
                loadPosts();
            })
            .catch((e) => {
                message.error('Příspěvek musí obsahovat nějaký text')
            });
        setVisible(false);
    };

    const addMessage = (email: string, message: ChatMessage) => {
        console.log("Přidávam zprávu: " + message.content)
        console.log(messages[email])
        setMessages(prevState => {
            const newState = {...prevState};
            if (!newState[email]) {
                newState[email] = [];
            }
            newState[email] = newState[email].concat(message);
            return newState;
        });
        console.log(messages[email])
    }

    const onIncomingMessage = useCallback((message: IncomingMessage) => {
        addMessage(message.sender, message);
        setLastInboundMessage(() => message);
    }, []);

    const onStatusChange = (statusChanges: UserStatusVO[]) => {
        console.log(statusChanges)
        let wentOnline: UserVO[] = [];
        let wentOffline: UserVO[] = [];
        statusChanges.forEach(friend => {
                const userVO: UserVO = {email: friend.email, name: friend.name}
                console.log(userVO)
                if (friend.status === Status.ONLINE) {
                    wentOnline.push(userVO)
                } else {
                    wentOffline.push(userVO);
                }
            }
        );
        setOnlineUsers(beforeOnline => {
            let newOnline = beforeOnline.filter(online =>
                wentOffline.find(offline => offline.email === online.email) === undefined);
            return newOnline.concat(wentOnline);
        });
    }

    const [sendMessage] = useMessagingConnection(redirecting, onIncomingMessage, onStatusChange);


    const handleMessageSubmit = (newMessage) => {
        if (chatmate) {
            const outboundMessage: OutgoingMessage = {addressee: chatmate.email, content: newMessage};
            addMessage(outboundMessage.addressee, outboundMessage);
            sendMessage(outboundMessage);
        }
    }

    const {SubMenu} = Menu;
    const avatarUrl = 'https://joeschmoe.io/api/v1/';

    return redirecting ? null : (
        <Layout style={{minHeight: "100vh"}}>
            <Layout.Header className="header">
                <NavBar/>
            </Layout.Header>
            <Layout>
                <Layout.Sider width={300} breakpoint="lg" collapsedWidth="0">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', paddingTop: 10}}
                    >
                        <SubMenu key="sub3" title={<Typography.Title level={4}>Online</Typography.Title>}>
                            <List
                                itemLayout="horizontal"
                                loading={false}
                                dataSource={onlineUsers}
                                style={{marginLeft: '30px'}}
                                renderItem={item => (
                                    <List.Item
                                        actions={[
                                            <Button onClick={() => showChat(item)}><MessageOutlined/></Button>,
                                        ]}
                                    >
                                        <List.Item.Meta
                                            title={item.name}
                                        />
                                    </List.Item>
                                )}
                            />
                        </SubMenu>
                    </Menu>
                </Layout.Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Layout.Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Row justify='center'>
                            <Typography.Title level={2}>Příspěvky</Typography.Title>
                        </Row>
                        <Row>
                            <Button type="primary" onClick={showModal}>
                                Nový příspěvek
                            </Button>
                        </Row>
                        <NewPostModal
                            visible={visible}
                            onCreate={onCreate}
                            onCancel={() => {
                                setVisible(false);
                            }}
                        />
                        <InfiniteScroll
                            dataLength={posts.length}
                            next={() => loadOlderPosts()}
                            hasMore={posts.length < 50}
                            loader={<Divider plain>Nic víc už tady není 🤐</Divider>}
                            endMessage={<Divider plain>Nic víc už tady není 🤐</Divider>}
                            scrollableTarget="scrollableDiv"
                        >
                            <List>
                                {posts.map(post =>
                                    <Card style={{marginTop: 16, width: '100%'}}>
                                        <Card.Meta
                                            avatar={<Avatar src={avatarUrl + post.author}/>}
                                            title={post.author}
                                            description={post.content}
                                        />
                                    </Card>
                                )}
                            </List>
                        </InfiniteScroll>
                        <PopupChat
                            hidden={chatHidden}
                            chatmate={chatmate?.name}
                            messages={getChatMessages()}
                            onClose={hideChat}
                            onMessageSubmit={handleMessageSubmit}
                        />
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    );

}

export default Posts;
