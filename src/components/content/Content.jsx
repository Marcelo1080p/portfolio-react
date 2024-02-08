import "./Content.css"
import React from "react";
import { Menu } from "../menu/Menu";

export const Content = ({children}) => {
    return(
        <main className="containerContent">
            <Menu/>
            {children}
        </main>
    )
}