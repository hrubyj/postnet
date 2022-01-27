import React, {useState} from "react";
import "antd/dist/antd.css";
import {Form, Input, Button, Space, notification, message} from "antd";
import {UserApi} from "@hrubyj/postnet-api/src";
import {LockOutlined, MailOutlined, UserOutlined,} from '@ant-design/icons';
import {Link} from "./Link";
import {useRouter} from "next/router";
import PasswordStrengthBar from "./PasswordStrengthBar";
import zxcvbn from "zxcvbn";

const RegistrationForm = () => {

    const router = useRouter();
    const [password, setPassword] = useState('');
    const [pwdStatus, setPwdStatus] = useState('');

    let pswStrength = zxcvbn(password);

    const onFinish = (user) => {
        if (pswStrength.score < 2) {
            message.error('Zadané heslo je příliš slabé')
            return
        }

        UserApi.registerUser(user)
            .then(() => {
                notification["success"]({
                    message: 'Registrace proběhla úspešně'
                })
                router.push('/login');
            })
            .catch((e) => {
                message.error('Registrace se nezdařila - email je již využíván')
            });
    };

    const onPasswordChange = ( password ) => {
        setPassword(password)
        pswStrength = zxcvbn(password)
        if (pswStrength.score > 1) {
            setPwdStatus("success")
        } else {
            setPwdStatus("error")
        }
    }

    const onFinishFailed = (errorInfo) => {
        message.error('Zadané údaje nejsou validní')
    };

    return (
        <Form onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="login-form">
            <Form.Item name="name" rules={[{required: true, message: "Zadejte prosím své jméno"}]} hasFeedback>
                <Input
                    prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="Jméno"
                />
            </Form.Item>
            <Form.Item name="email" rules={[{
                required: true,
                type: "email",
                message: "Zadejte prosím validní email"
            }]} hasFeedback>
                <Input
                    prefix={<MailOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item name="password" rules={[{required: true, message: "Zadejte prosím heslo"}]}
                       style={{margin: 0}} validateStatus={pwdStatus} hasFeedback>
                <Input.Password
                    onChange={e => onPasswordChange(e.target.value)}
                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="Heslo"
                />
            </Form.Item>
            <PasswordStrengthBar password={password}/>
            <Form.Item name="confirm" dependencies={['password']} hasFeedback
                       rules={[{required: true, message: 'Potvrďte své heslo prosím'},
                           ({getFieldValue}) => ({
                               validator(_, value) {
                                   if (!value || getFieldValue('password') === value) {
                                       return Promise.resolve();
                                   }
                                   return Promise.reject(new Error('Zadaná hesla se neshodují'));
                               },
                           }),
                       ]}
            >
                <Input.Password
                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                    placeholder="Potvrzení hesla"/>
            </Form.Item>
            <Form.Item>
                <Space>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Registrovat
                    </Button>
                    <Link href="/">Zrušit</Link>
                </Space>
            </Form.Item>
        </Form>
    );
}

export default RegistrationForm;

