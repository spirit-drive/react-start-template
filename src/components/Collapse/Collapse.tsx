import React, { FC, useLayoutEffect, useState } from "react";
import cl from './Collapse.module.scss';
import { Button } from "../button/Button";

export type collapseProps = {
    children: React.ReactNode,
    visible:boolean
}

export const Collapse: FC<collapseProps> = ({ children, visible }) => {
    const [visibilityState,setVisibilityState ]= useState(visible)
        useLayoutEffect(() => {
            if (visibilityState) {
                setVisibilityState(!visibilityState)
            console.log('here');
            } else console.log('not herer');
        }, [visible]);

    if (visible) {
        return (
            <div className={cl.wrapper}>
                {children}
            </div>
        )
    }
    else {
        return (
            <div className={cl.wrapper}></div>
        )

    }
}