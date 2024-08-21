import { ICollapseTypes } from "./CollapseTypes";
import React, { FC, useEffect, useState, useLayoutEffect, useRef } from 'react';
import cn from 'clsx';
import './collapse.scss'



export const Collapse: FC<ICollapseTypes> = ({...props}) => {
    const [visible, setVisible] = useState<Boolean>(false)
    const [height, setHeight] = useState<Number>(0)
    const [top, setTop] = useState<Number>(-200)
    const containerRef = useRef(null)
    const collapseText = useRef(null)

    useLayoutEffect(()=>{
        if (props.opened) {
            setVisible(true)
        } 
    },[props.opened])

    useEffect(() => {
        if (props.opened && visible) {
            setTop(0)
            const collapseHeight = collapseText.current.getBoundingClientRect().height
            setHeight(collapseHeight + 20)
            return
        } else if (!props.opened && visible) {
            setTop(-200)
        } 
    }, [visible, props.opened])

    const onEnd = () => {
        if (props.opened) {
            return
        } else {
            setVisible(false)
            setHeight(0)
        }
        
    }

    return (
        <div className={cn("collapseContainer", { ["close"]: height === 0 })} style={{height: `${height}px`}}   ref={containerRef}>
            { visible ? <div  
            onTransitionEnd={onEnd}  style={{
                top: `${top}px`,
                transition: 'top 1s',
              }}
            className={ `collapseText ` } ref={collapseText}>{props.text} </div> : <div></div>}
        </div>
    );
};


