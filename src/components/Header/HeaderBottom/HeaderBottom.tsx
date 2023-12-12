import React, { FC, ReactElement } from "react";
import "./HeaderBottom.scss";
import { Navigation } from "../../Navigation";

window.addEventListener("scroll", function () {
    document.getElementById("header-nav").classList.toggle("headernav-scroll", window.scrollY > 135);
});

/**
 * Компонент нижней части шапки сайта
 */
export const HeaderBottom: FC = (): ReactElement => {    
    return (
        <div className="header-bottom sticky-top" id="header-nav">
            <Navigation />
        </div>
    );
};