import React from "react";
import "./Header.sass";
import { HeaderTop } from "./HeaderTop";
import { HeaderMiddle } from "./HeaderMiddle";
import { HeaderBottom } from "./HeaderButtom";

export const Header = () => {
    return (
        <>
            <header className="header">
                <HeaderTop />
                <HeaderMiddle />
            </header>
            <HeaderBottom />
        </>
    );
};