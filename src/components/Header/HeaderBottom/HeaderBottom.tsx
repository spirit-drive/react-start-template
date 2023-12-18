import React, { FC, ReactElement, useEffect } from "react";
import "./HeaderBottom.scss";
import { Navigation } from "../../Navigation";

/**
 * Компонент нижней части шапки сайта
 */
export const HeaderBottom: FC = (): ReactElement => {
    useEffect(() => {
        window.addEventListener("scroll", function () {
            document.getElementById("header-nav").classList.toggle("headernav-scroll", window.scrollY > 135);
        });
    }, []);
    return (
        <div className="header-bottom sticky-top" id="header-nav">
            <Navigation />
        </div>
    );
};