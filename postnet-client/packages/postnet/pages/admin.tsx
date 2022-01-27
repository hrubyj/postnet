import React, {useState, useEffect} from 'react';

import {useAuthHeader, useAuthData, useUnauthRedirect} from "../hooks";
import {useRouter} from "next/router";
import {
    Menu,
    Layout,
    Button,
    notification,
    Input,
    Row,
    Avatar,
    Skeleton,
    List,
    Typography, Col, Switch, message
} from "antd";
import {AdminApi, AdminRoleVO, UserApi, UserVO} from "../../postnet-api/src";
import "antd/dist/antd.css";
import NewAnnounModal from "../components/NewAnnounModal";
import NavBar from "../components/NavBar";

function Admin() {

    const router = useRouter();
    const redirecting = useUnauthRedirect('/login');

    const [, email, admin, ,] = useAuthData();
    const authHeader = useAuthHeader();

    const [visible, setVisible] = React.useState(false);
    const [strangers, setStrangers] = useState<UserVO[]>([]);

    let fulltext = "";
    let search = false;

    useEffect(() => {
        if (admin === false) {
            router.push("/posts")
        }

        setStrangers([]);
        if (!redirecting && authHeader) {
            loadUsers();
        }
    }, []);

    const loadUsers = () => {
        const fetchData = async () => {
            let data: UserVO[] = [];
            try {
                if (search) {
                    data = (await UserApi.getAllUsers(fulltext, authHeader)).data;
                } else {
                    data = (await UserApi.getAllUsers("", authHeader)).data;
                }
                setStrangers(data);
            } catch (error) {
                message.error("Při vyhledávání uživatelů došlo k chybě")
            }
        }
        fetchData();
    }

    const showModal = () => {
        setVisible(true);
    };

    const onChange = (id, checked) => {
        const admin: AdminRoleVO = {};
        admin.admin = checked;
        admin.userId = id;
        AdminApi.setAdminRole(admin, authHeader).then(() => {
            notification["success"]({
                message: 'Role uživatele byla úspešně změněna'
            })
            loadUsers();
        }).catch((e) => {
            notification["error"]({
                message: "Při změně role uživatele došlo k chybě"
            })
        });
    }

    const onCreate = (values: any) => {
        values.author = email
        console.log(values)
        AdminApi.createAnnouncement(values, authHeader)
            .then(() => {
                message.success('Oznámení úspěšně zveřejněno')
            })
            .catch((e) => {
                message.error('Oznámení musí obsahovat nějaký text')
            });
        setVisible(false);
    };

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

    return redirecting || (admin === false) ? null : (
        <Layout style={{minHeight: "100vh"}}>
            <Layout.Header className="header">
                <NavBar/>
            </Layout.Header>
            <Layout>
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                    }}
                >
                    <Row justify='center'>
                        <Typography.Title level={2}>Administrace</Typography.Title>
                    </Row>
                    <Row justify='center'>
                        <Button type="primary" style={{marginBottom: '20px'}} onClick={showModal}>
                            Nové oznámení
                        </Button>
                    </Row>
                    <NewAnnounModal
                        visible={visible}
                        onCreate={onCreate}
                        onCancel={() => {
                            setVisible(false);
                        }}
                    />
                    <Row justify='center'>
                        <Typography.Title level={3}>Administrátoři</Typography.Title>
                    </Row>
                    <Col xs={{span: 24, offset: 0}} lg={{span: 10, offset: 7}}>
                        <Row justify='center'>
                            <Input.Search placeholder="vyhledejte uživatele" allowClear
                                          onSearch={onSearch}
                                          onChange={(e) => {
                                              onFulltextChange(e)
                                          }}
                                          style={{width: '50%', marginLeft: 20, marginBottom: '20px'}}
                                          enterButton/>
                        </Row>
                    </Col>
                    <Row justify='center'>
                        <Col xs={{span: 24, offset: 9}} lg={{span: 9, offset: 4}}>
                            <List
                                itemLayout="horizontal"
                                loading={false}
                                dataSource={strangers}
                                style={{width: '60%'}}
                                renderItem={item => (
                                    <List.Item
                                        actions={[
                                            <Switch checked={item.admin}
                                                    onChange={() => onChange(item.id, !item.admin)}/>,
                                        ]}
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
                        </Col>
                    </Row>
                </Layout.Content>
            </Layout>
        </Layout>
    )
        ;

}

export default Admin;
