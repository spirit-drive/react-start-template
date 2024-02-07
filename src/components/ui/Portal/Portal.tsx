import React, { FC, } from "react";
import ReactDOM from "react-dom";
import cn from "classnames"
import { PopupWrapper } from "src/components/PopupWrapper/PopupWrapper";

const root = document.querySelector('body');

export interface IPortalProps {
    className?: string,
    children?: React.ReactNode,
    visible:boolean

}


export const Portal: FC<IPortalProps> = ({className,children,visible }) => {
    return root ? ReactDOM.createPortal(
        <PopupWrapper
        visible={visible}>
            {children}
        </PopupWrapper>,
        root
    ):null
}