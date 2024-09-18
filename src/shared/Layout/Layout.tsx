import React from "react"
import s from './Layout.module.sass'
import { Header } from "../Header"

export const Layout = () => {
    return(
        <div className={s.mainContainer}>
            <div className={s.headerData}>
                <Header />
            </div>
            <div className={s.menuData}>
                Меню слева
            </div>        
            <div className={s.contentData}>
                Содержимое сайта
            </div>
            <div className={s.footerData}>
                Футер
            </div>
            
        </div>
    );
}