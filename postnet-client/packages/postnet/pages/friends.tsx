import React, {useState, useEffect} from 'react';

import {useAuthHeader, useAuthData, useUnauthRedirect} from "../hooks";
import {useRouter} from "next/router";
import {
    Menu,
    Layout,
    Button,
    notification,
    Input,
    Avatar,
    Skeleton,
    List,
    Typography, message, Row, Card, Switch, Badge, Empty
} from "antd";
import {
    CheckOutlined, CloseOutlined,
    StopOutlined, UserAddOutlined, UserDeleteOutlined
} from "@ant-design/icons";
import {FriendshipApi, UserApi, UserVO} from "../../postnet-api/src";
import "antd/dist/antd.css";
import NavBar from "../components/NavBar";

function Friends() {

    const router = useRouter();
    const redirecting = useUnauthRedirect('/login');

    const authHeader = useAuthHeader();
    const [strangers, setStrangers] = useState<UserVO[]>([]);
    const [friends, setFriends] = useState<UserVO[]>([]);
    const [requests, setRequests] = useState<UserVO[]>([]);
    const [blocked, setBlocked] = useState<UserVO[]>([]);

    let fulltext = "";
    let search = false;

    useEffect(() => {
        setStrangers([]);
        setFriends([]);
        setRequests([]);
        setBlocked([]);
        if (!redirecting && authHeader) {
            loadUsers();
            loadFriends();
            loadRequests();
            loadBlockedUsers();
        }
    }, []);

    const loadUsers = () => {
        const fetchData = async () => {
            let data: UserVO[] = [];
            try {
                if (search) {
                    data = (await UserApi.getStrangers(fulltext, authHeader)).data;
                } else {
                    data = (await UserApi.getStrangers("", authHeader)).data;
                }
                setStrangers(data);
            } catch (error) {
                message.error("Při vyhledávání uživatelů došlo k chybě")
            }
        }
        fetchData();
    }

    const loadFriends = () => {
        const fetchData = async () => {
            let data: UserVO[] = [];
            try {
                data = (await UserApi.getFriends(authHeader)).data;
                setFriends(data);
                console.log(data)
            } catch (error) {
                message.error("Při vyhledávání přátel došlo k chybě")
            }
        }
        fetchData();
    }

    const loadRequests = () => {
        const fetchData = async () => {
            let data: UserVO[] = [];
            try {
                data = (await FriendshipApi.getRequests(authHeader)).data;
                setRequests(data);
            } catch (error) {
                message.error("Při vyhledávání žádostí o přátelství došlo k chybě")
            }
        }
        fetchData();
    }

    const loadBlockedUsers = () => {
        const fetchData = async () => {
            let data: UserVO[] = [];
            try {
                data = (await UserApi.getBlocked(authHeader)).data;
                setBlocked(data);
            } catch (error) {
                message.error("Při vyhledávání blokovaných uživatelů došlo k chybě")
            }
        }
        fetchData();
    }

    const onFulltextChange = (e) => {
        fulltext = e.target.value;
    }

    const onSearch = () => {
        if (fulltext.length == 0) {
            search = false;
            loadUsers();
        } else if (fulltext.length < 3) {
            message.error('Zadejte alespoň 3 znaky')
        } else {
            search = true;
            loadUsers();
        }
    }

    const addNewFriend = (id) => {
        FriendshipApi.createFriendship(id, authHeader).then(() => {
            notification["success"]({
                message: 'Uživatel byl úspešně přidán'
            })
            loadUsers();
        }).catch((e) => {
            notification["error"]({
                message: 'Při odesílání žádosti o přátelství nastala chyba'
            })
        });
    }

    const removeFriend = (id) => {
        FriendshipApi.deleteFriendship(id, authHeader).then(() => {
            notification["success"]({
                message: 'Uživatel byl úspešně odebrán'
            })
            loadUsers();
            loadFriends();
            loadBlockedUsers();
        }).catch((e) => {
            notification["error"]({
                message: 'Při odebírání uživatele nastala chyba'
            })
        });
    }

    const blockUser = (id) => {
        FriendshipApi.createBlock(id, authHeader).then(() => {
            notification["success"]({
                message: 'Uživatel byl úspešně zablokován'
            })
            loadUsers();
            loadBlockedUsers();
        }).catch((e) => {
            notification["error"]({
                message: 'Při blokování uživatele nastala chyba'
            })
        });
    }

    const confirmRequest = (id) => {
        FriendshipApi.confirmFriendship(id, authHeader).then(() => {
            notification["success"]({
                message: 'Žádost byla přijata'
            })
            loadRequests();
            loadFriends();
        }).catch((e) => {
            notification["error"]({
                message: 'Během potvrzování žádosti nastala chyba'
            })
        });
    }

    const rejectRequest = (id) => {
        FriendshipApi.deleteFriendship(id, authHeader).then(() => {
            notification["success"]({
                message: 'Žádost byla odmítnuta'
            })
            loadRequests();
            loadUsers();
        }).catch((e) => {
            notification["error"]({
                message: 'Během odmítání žádosti nastala chyba'
            })
        });
    }


    const {SubMenu} = Menu;

    return redirecting ? null : (
        <Layout style={{minHeight: "100vh"}}>
            <Layout.Header className="header">
                <NavBar/>
            </Layout.Header>
            <Layout>
                <Layout.Sider width={300} breakpoint="lg" collapsedWidth="0" collapsible>
                    <Menu
                        mode="inline"
                        style={{height: '100%', paddingTop: 10}}
                    >
                        <SubMenu key="sub1" title={<Typography.Title level={4}>Přátelé</Typography.Title>}>
                            {friends.length != 0 &&
                            (<List
                                    itemLayout="horizontal"
                                    loading={false}
                                    dataSource={friends}
                                    rowKey={(item) => item.email}
                                    style={{marginLeft: '30px'}}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.email}
                                            actions={[<Button onClick={() => {
                                                removeFriend(item.id)
                                                console.log(item.id)
                                            }}><UserDeleteOutlined/></Button>]}
                                        >
                                            <List.Item.Meta
                                                title={item.name}
                                            />
                                        </List.Item>
                                    )}
                                />
                            )}
                            {
                                friends.length == 0 && <Empty description="Žádní přátelé"/>
                            }
                        </SubMenu>
                        {requests.length != 0 && (
                            <SubMenu key="sub2" title={<Typography.Title level={4}>Žádosti o přátelství <Badge
                                count={requests.length}/></Typography.Title>}>
                                <List
                                    itemLayout="horizontal"
                                    loading={false}
                                    dataSource={requests}
                                    style={{marginLeft: '30px'}}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.id}
                                            actions={[
                                                <Button
                                                    onClick={() => confirmRequest(item.id)}><CheckOutlined/></Button>,
                                                <Button onClick={() => rejectRequest(item.id)}><CloseOutlined/></Button>
                                            ]}
                                        >
                                            <List.Item.Meta
                                                title={item.name}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </SubMenu>)}
                        {blocked.length != 0 && (
                            <SubMenu key="sub3"
                                     title={<Typography.Title level={4}>Blokovaní uživatelé</Typography.Title>}>
                                <List
                                    itemLayout="horizontal"
                                    loading={false}
                                    dataSource={blocked}
                                    style={{marginLeft: '30px'}}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.id}
                                            actions={[
                                                <Button onClick={() => removeFriend(item.id)}><CloseOutlined/></Button>,
                                            ]}
                                        >
                                            <List.Item.Meta
                                                title={item.name}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </SubMenu>)}
                    </Menu>
                </Layout.Sider>
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <Row justify='center'>
                        <Typography.Title level={2}>Přidat přítele</Typography.Title>
                    </Row>
                    <Row justify='center'>
                        <Input.Search placeholder="vyhledejte uživatele" allowClear
                                      onSearch={onSearch}
                                      onChange={(e) => {
                                          onFulltextChange(e)
                                      }}
                                      style={{width: '40%', marginBottom: '20px'}}
                                      enterButton/>
                    </Row>
                    <Row justify='center'>
                        <List
                            className="demo-loadmore-list"
                            itemLayout="horizontal"
                            loading={false}
                            dataSource={strangers}
                            style={{width: '40%'}}
                            renderItem={item => (
                                <List.Item
                                    key={item.id}
                                    actions={[<Button key="list-add"
                                                      onClick={() => addNewFriend(item.id)}><UserAddOutlined/> přidat</Button>,
                                        <Button key="list-block" onClick={() => blockUser(item.id)}
                                                danger><StopOutlined/> blokovat</Button>]}
                                >
                                    <Skeleton avatar title={false} loading={false} active>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                                            title={item.name}
                                            description={item.email}
                                        />
                                    </Skeleton>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Layout.Content>
            </Layout>
        </Layout>
    );

}

export default Friends;
