import React, { FC, HTMLProps, PropsWithChildren, useContext } from "react";
import * as styles from './styles.module.scss'
import { Header } from "../Header/Header";
import { ThemeContext } from "../Provider/ThemeProvider";

export interface ILayout extends HTMLProps<HTMLDivElement> {}

const Layout:FC<ILayout> = (props:ILayout) => {
    const [theme, ] = useContext(ThemeContext) ;

    return <div className={styles.layout}  style={theme === 'dark'?{backgroundColor: 'rgb(177, 189, 230)'}:{}} >
        <Header/>
        {props.children}
    </div>
}

export default Layout