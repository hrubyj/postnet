import React from "react";

import {Layout, Typography, Space, Row, Col} from "antd";

import "antd/dist/antd.css";
import LoginForm from "../components/LoginForm";

function Login() {

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Space size={100} direction="vertical">
                <Layout.Header>
                </Layout.Header>
                <Layout.Content>
                    <Row justify="center">
                        <Typography.Title level={2}>Přihlášení</Typography.Title>
                    </Row>
                    <Row justify="center">
                        <LoginForm/>
                    </Row>
                </Layout.Content>
            </Space>
        </Layout>
    );
}

export default Login;