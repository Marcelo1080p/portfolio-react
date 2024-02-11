import "./ItemMenu.css";
import React from "react";

export const ItemsMenu = ({title, icon}) => {
    
    return(
        <section className="containerItemsMenu">
            <span className="menuIcon">{icon}</span>
            <p className="menuTitle">{title}</p>
        </section>
    )
}