import React from 'react';
import AppHeader from "../header/AppHeader";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <>
            <AppHeader/>
            {children}
        </>
    );
};
export default Layout;
