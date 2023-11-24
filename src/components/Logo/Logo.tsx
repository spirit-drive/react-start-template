import React, { FC } from "react";
import "./Logo.sass";

interface LogoProps{
    title: string;
};

export const Logo: FC<LogoProps> = ({title}) => {
    return (
        <a href="index.html" className="header-logo h1">{title}</a>
    );
};