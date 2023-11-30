import React, { FC, ReactElement } from 'react';
import "./Layout.scss";

interface LayoutProps {
    
    /**
     * Внутреннее содержимое макета
     */
    children?: React.ReactNode;
};

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header
 */
export const Layout: FC<LayoutProps> = ({children}): ReactElement => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};