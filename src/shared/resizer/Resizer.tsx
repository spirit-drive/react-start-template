import React, { FC, useRef, useState } from 'react';
import s from './Resizer.modules.sass';

export interface ResizerProps {
    children: React.ReactElement;
    initialWidth?: number;
    initialHeight?: number;  
};

const MINIMUM_SIZE = 64;

export const Resizer: FC<ResizerProps> = ({ children, initialWidth=400, initialHeight=200 }) => {
    const refRoot = useRef<HTMLDivElement>();
    const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
    const onMouseDown = (e: React.MouseEvent) => {
        e.stopPropagation();  
  
        const mouseMoveHandler = (e: MouseEvent) => {
            const rect = refRoot.current.getBoundingClientRect();
            setSize({ width: Math.max(e.clientX - rect.x, MINIMUM_SIZE), height: Math.max(e.clientY - rect.y, MINIMUM_SIZE)});
        };
  
        const mouseUpHandler = () => {
            document.removeEventListener('mouseup', mouseUpHandler);
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
  
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };    

    return (
        <div ref={refRoot} className={s.root} style={{ width: size.width, height: size.height }}>
            <div className={s.wrapper}>{children}</div>
            <button type="button" className={s.resizer} onMouseDown={onMouseDown} />
        </div>
    );
};
