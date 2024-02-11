import { FolderOutlined, HomeOutlined, UserOutlined, WechatOutlined } from "@ant-design/icons";
import { Foto } from "../foto/Foto";
import { ItemsMenu } from "../itemsMenu/ItemsMenu";
import "./Menu.css"
import React from "react";

export const Menu = () => {
    const items = [
        {
            title: "Home",
            icon: <HomeOutlined />,
        },
        {
            title: "About",
            icon: <UserOutlined />,
        },
        {
            title: "Projects",
            icon: <FolderOutlined />,
        },
        {
            title: "Contact",
            icon: <WechatOutlined />,
        }
    ];
    return(
        <section className="containerMenu">
            <Foto/>
            {items.map((item) => (
                <ItemsMenu title={item.title} icon={item.icon}/>
            ))}
        </section>
    );
};