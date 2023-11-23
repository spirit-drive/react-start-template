import React, { FC } from "react";
import "./Logo.sass";

type IProps = {
    title: string;
};

export const Logo: FC<IProps> = ({title}) => {
    return (
        <a href="index.html" className="header-logo h1">{title}</a>
    );
};