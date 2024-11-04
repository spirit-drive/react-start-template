import React, { ReactNode } from "react";
import s from './LabelWrapper.module.sass';

export interface ILabelWrapperProps {
    title: string;
    required: boolean;
    children: ReactNode;
}

export const LabelWrapper = ({ title, required, children }: ILabelWrapperProps) => {
    return (
        <div className={s.containerColumn}>

            <div className={s.containerRow}>
                {title} 
                {required ? <div className={s.colorRed}>*</div> : null}
            </div>
            {children}
        </div>
    )
}