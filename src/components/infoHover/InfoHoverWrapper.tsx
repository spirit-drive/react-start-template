import React, { FC, useRef, useState } from "react";
import cl from './infoHover.module.scss';
import cn from "classnames";
// import {getItemCoord} from './functions'

export type infoHoverWrapperProps = {
    children: React.ReactNode,
    hoverComponent?: React.ReactNode
}


export const InfoHoverWrapper: FC<infoHoverWrapperProps> = ({ children, hoverComponent }) => {
    const [hoverVisibility, setHoverVisibility] = useState(false)
    const parentElRef = useRef<HTMLDivElement>(null)
    const [elementAbsolutePosition,setElementAbsolutePosition]=useState({top:'0',right:'0',bottom:'auto', left:'auto'})

    const getElementPositionOnPage = (parentElRef:any) => {
        const coordX = parentElRef.current.getBoundingClientRect().top;
            const coordY = parentElRef.current.getBoundingClientRect().left;
            const windowVueHeight = document.documentElement.clientHeight;
            const windowVueWidth = document.documentElement.clientWidth;
            if (coordY <= (windowVueWidth / 2) && coordX <= (windowVueHeight / 2)) {
                setElementAbsolutePosition({top:'auto',right:'auto',bottom:'100%', left:'0'})
            } else if(coordY > (windowVueWidth / 2) && coordX <= (windowVueHeight / 2)) {
                setElementAbsolutePosition({top:'auto',right:'0',bottom:'100%', left:'auto'})
            } else if (coordY <= (windowVueWidth / 2) && coordX > (windowVueHeight / 2)) {
                setElementAbsolutePosition({top:'100%',right:'auto',bottom:'auto', left:'0px'})
            } else {
                setElementAbsolutePosition({top:'100%',right:'0',bottom:'auto', left:'auto'})
            }
    }
    const mouseOn = () => {
        setHoverVisibility(true);
        getElementPositionOnPage(parentElRef);
    }
    const mouseOf = () => {
        setHoverVisibility(false)
    }
    if (hoverComponent) {
        return (
            <div
                ref={parentElRef}
                className={cn(cl.itemWrapper, (hoverComponent ? cl.itemWrapperHover : ''))}
                onMouseEnter={() => mouseOn()}
                onMouseLeave={() => mouseOf()}
            >
                {hoverComponent && hoverVisibility &&
                    <div
                        style={{
                            bottom: `${elementAbsolutePosition.bottom}`,
                            right: `${elementAbsolutePosition.right}`,
                            top: `${elementAbsolutePosition.top}`,
                            left: `${elementAbsolutePosition.left}`
                        }}
                        className={cl.hoverItem}
                    >{hoverComponent}</div>
                }
                {children}
            </div>
        )
    } else {
        return (<>
                    {children}
        </>

        )



    }
}