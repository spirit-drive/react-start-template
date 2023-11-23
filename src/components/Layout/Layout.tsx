import React, { FC } from 'react';
import "./Layout.sass";

type IProps = {
    children: React.ReactNode;
};

export const Layout: FC<IProps> = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};