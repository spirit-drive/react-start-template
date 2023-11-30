import React, { FC, ReactElement } from "react";
import "./Logo.scss";

interface LogoProps{

    /**
     * Текстовый заголовок логотипа
     */
    title: string;
};

/**
 * Компонент Logo. Презентационный компонент, сделайте любой на свой вкус, можно использовать и просто круг, главное обозначить его место в хедере.
 */
export const Logo: FC<LogoProps> = ({title = "E-Shop"}): ReactElement => {
    return (
        <a href="index.html" className="header-logo h1">{title}</a>
    );
};