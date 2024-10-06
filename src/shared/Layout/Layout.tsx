import React, { ReactNode } from "react"
import s from './Layout.module.sass'
import { Header } from "../Header";

interface ILayoutProps {
    children?: ReactNode | ReactNode[];
}

export const Layout = ({ children }: ILayoutProps) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.headerData}>
                <Header />
            </div>
            <div className={s.menuData}>
                Меню слева
            </div>
            <div className={s.contentData}>
                {children}
            </div>
            <div className={s.footerData}>
                Футер
            </div>

        </div>
    );
}