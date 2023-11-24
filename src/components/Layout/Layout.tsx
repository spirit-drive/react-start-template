import React, { FC } from 'react';
import "./Layout.sass";

interface LayoutProps {
    /**
     * Внутреннее содержимое макета
     */
    children?: React.ReactNode;
};

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header 
 * @param param0 
 * @returns 
 */
export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};