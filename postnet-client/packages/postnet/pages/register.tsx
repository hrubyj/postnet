import React from "react";

import {Layout, Typography, Space, Row, Col} from "antd";

import "antd/dist/antd.css";
import RegistrationForm from "../components/RegistrationForm";

function Register() {

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Space size={100} direction="vertical">
                <Layout.Header>
                </Layout.Header>
                <Layout.Content>
                    <Row justify="center">
                        <Typography.Title level={2}>Registrace</Typography.Title>
                    </Row>
                    <Row justify="center">
                        <RegistrationForm/>
                    </Row>
                </Layout.Content>
            </Space>
        </Layout>
    );
}

export default Register;