import React from "react";
import "antd/dist/antd.css";
import {Form, Input, Button, Space, message} from "antd";
import { UserApi } from "@hrubyj/postnet-api/src";
import { LockOutlined, MailOutlined, } from '@ant-design/icons';
import {Link} from "./Link";
import {useRouter} from "next/router";
import {useAuthData} from "../hooks";

const LoginForm = () => {
    const router = useRouter();
    const [,,,loginUser,] = useAuthData();

    const onFinish = async (credentials) => {
        try {
            const response = await UserApi.loginUser(credentials)
            const authData = response.data
            loginUser({email: authData.login, name: authData.name, admin: authData.admin, accessToken: authData.token});
            message.success("Přihlášení proběhlo úspešně")
            router.push('/posts');

        } catch(e) {
            message.error('Chybný email nebo heslo');
        }
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Při přihlašování došlo k neznámé chybě');
    };

    return (
        <Form onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form">
            <Form.Item name="email" rules={[{
                required: true,
                type: "email",
                message: "Zadejte prosím validní email!"
            }]}>
                <Input
                    prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item name="password" rules={[{required: true, message: "Prosím zadejte heslo"}]}>
                <Input
                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    type="password"
                    placeholder="Heslo"
                />
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Přihlásit
                    </Button>nebo
                    <Link href="/register">Registrovat</Link>
                </Space>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;

