import React, {useCallback} from "react";
import {Menu} from "antd";
import {HomeOutlined, SettingOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import {useAuthData} from "../hooks";


const NavBar = () => {

    const router = useRouter();
    const [name,,admin,,logoutUser] = useAuthData();
    const {SubMenu} = Menu;

    const handleLogout = useCallback(() => {
        logoutUser();
        router.push("/login")
    }, []);

    return (
        <Menu style={{float: 'right'}} theme="dark" mode="horizontal">
            <Menu.Item key="1" onClick={() => router.push('/posts')}><HomeOutlined/> Domů</Menu.Item>
            <Menu.Item key="2" onClick={() => router.push('/friends')}><TeamOutlined/> Přátelé</Menu.Item>
            {(admin === true) &&
                <Menu.Item key="3" onClick={() => router.push('/admin')}><SettingOutlined/> Administrace</Menu.Item>
            }

            <SubMenu key="account" icon={<UserOutlined/>} title={name}>
                <Menu.Item key="setting:2" onClick={() => handleLogout()}>Odhlásit se</Menu.Item>
            </SubMenu>

        </Menu>
    )
}

export default NavBar