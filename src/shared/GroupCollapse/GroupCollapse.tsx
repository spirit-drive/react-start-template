import React, { FC, ReactNode, useLayoutEffect, useState } from "react";
import cn from 'clsx';
import s from './GroupCollapse.module.sass';
import { CollapseHeader } from "./CollapseHeader/CollapseHeader";
import { ChildContainerFadeIn } from "./ChildContainerFadeIn/ChildContainerFadeIn";

interface IGroupCollapseProps {
    title: string;
    isOpen: boolean;
    onToggleOpenClick: () => void;
    children?: ReactNode[];
    className?: string;
}

export const GroupCollapse: FC<IGroupCollapseProps> = ({ title, isOpen, onToggleOpenClick, children, className}) => {
    const [showCount, setShowCount] = useState<number>(0);
    useLayoutEffect(() => {
        if (isOpen && children && children.length > 0) {
            setShowCount(1);
        }

    }, [isOpen, children])

    const onTransitionEndCallback = () => {
        setShowCount(prev => prev + 1);
    }

    return (
        <div className={cn(s.container, className)}>
            <CollapseHeader title={title} isOpen={isOpen} onToggleOpenClick={onToggleOpenClick} />
            {isOpen && children &&
                children.map((child, index) =>
                    <ChildContainerFadeIn
                        key={index}
                        child={child}
                        isShow={(showCount - 1) >= index}
                        onTransitionEndCallback={onTransitionEndCallback}
                    />
                )
            }
        </div>
    );
}