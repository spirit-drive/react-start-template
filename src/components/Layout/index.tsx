import React, { FC, HTMLProps, PropsWithChildren } from "react";
import * as styles from './styles.module.scss'
import { Header } from "../Header";

export interface ILayout extends HTMLProps<HTMLDivElement> {}

const Layout:FC<ILayout> = (props:ILayout) => {
    return <div className={styles.layout}  >
        <Header/>
        {props.children}
    </div>
}

export default Layout