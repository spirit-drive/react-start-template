import React, { FC, useEffect, useLayoutEffect, useRef, useState, TransitionEvent } from 'react';
import { ITooltipPosition, ITooltipProps } from './TooltipTypes';
import { createPortal } from 'react-dom';
import './tooltip.scss';

export const Tooltip: FC<ITooltipProps> = ({ text, children }) => {
    const ref = useRef(null);
    const tooltipTextRef = useRef(null);
    const [tooltipPosition, setTooltipPosition] = useState<ITooltipPosition>({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    const handleMouseOver = () => {
        setActive(true);
    };

    const handleMouseOut = () => {
        setActive(false);

    };


    useLayoutEffect(() => {
        const tooltipHeight = tooltipTextRef.current.getBoundingClientRect().height;
        const { top, x } = ref.current.getBoundingClientRect();
        setTooltipPosition({ x: x, y: top - tooltipHeight });
    }, [tooltipPosition.x, tooltipPosition.y]);

    useEffect(() => {
        ref.current.addEventListener("mouseover", handleMouseOver, false);
        ref.current.addEventListener("mouseout", handleMouseOut, false);

        return () => {
            ref.current.addEventListener("mouseover", handleMouseOver, false);
            ref.current.addEventListener("mouseout", handleMouseOut, false);
        }
    }, [])

    return (
        <>
            <div ref={ref} className="tooltip-container">
                {children}
            </div>
            {createPortal(
                <div
                    ref={tooltipTextRef}
                    style={{ top: `${tooltipPosition.y}px`, left: `${tooltipPosition.x}px`}}
                    className={!active ? "tooltip-text hide" : 'tooltip-text'}
                >
                    {text}
                </div>,
                document.body
            )}
        </>
    );
};