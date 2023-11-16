import React from "react";
import s from "./Logo.module.sass";

export const Logo = ({title}) => {
    return (
        <a href="index.html" className={`${s.logo} h1`}>{title}</a>
    );
};