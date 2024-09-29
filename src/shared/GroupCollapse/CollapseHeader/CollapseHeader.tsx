import React from "react";
import cn from 'clsx';
import s from './CollapseHeader.module.sass';
import { ChevronIcon } from "../ChevronIcon/ChevronIcon";

export interface ICollapseHeaderProps {
    title: string;
    isOpen: boolean;
    onToggleOpenClick: () => void;
}

export const CollapseHeader = ({ title, isOpen, onToggleOpenClick }: ICollapseHeaderProps) => {
    return (
        <div className={s.container}>
            <div className={s.title}>{title}</div>
            <div className={cn(s.chevronIcon, isOpen ? s.chevronIconOpen : '')} onClick={onToggleOpenClick} >
                <ChevronIcon />
            </div>
        </div>

    )
}