import {useCookies} from 'react-cookie'
import {useRouter} from 'next/router'
import {Button, Col, Layout, Row, Space, Typography} from "antd";

import React from "react";
import "antd/dist/antd.css";

function Home() {
    const [cookies] = useCookies(['accessToken']);
    const router = useRouter();

    if (cookies.accessToken) {
        router.push('/posts');
    }

    return cookies.accessToken ? null : (
        <Layout style={{minHeight: "100vh"}}>
            <Space size={100} direction="vertical">
                <Layout.Header>
                </Layout.Header>
                <Layout.Content style={{marginLeft: 20}}>
                    <Row justify="center">
                        <Typography.Title level={2}>Vítejte v PostNet</Typography.Title>
                    </Row>
                    <Row justify="center">
                        <Button type="primary"
                                onClick={() => router.push("/login")}
                                style={{
                                    marginTop: 20, marginLeft: 10,
                                    marginBottom: 20, width: '200px'
                                }}>
                            Přihlásit se
                        </Button>
                    </Row>
                    <Row justify="center">
                        <Button type="primary"
                                onClick={() => router.push("/register")}
                                style={{
                                    width: '200px', marginLeft: 10,
                                    background: 'rgb(36,224,15)',
                                    borderColor: 'rgb(36,224,15)'
                                }}>
                            Vytvořit nový účet
                        </Button>
                    </Row>
                </Layout.Content>
            </Space>
        </Layout>
    );

}

export default Home;