import React, { FC } from 'react';
import "./Layout.sass";

interface LayoutProps {
    children?: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};