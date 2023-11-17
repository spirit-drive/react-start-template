import React from "react";
import "./Logo.sass";

export const Logo = ({title}) => {
    return (
        <a href="index.html" className="header-logo h1">{title}</a>
    );
};