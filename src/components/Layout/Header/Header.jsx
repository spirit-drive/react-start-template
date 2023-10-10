import React from 'react';
import styled from '@emotion/styled';

import { Logo } from './Logo/Logo';

const HeaderComponent = styled.header`
    width: 100%;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    padding: 20px 160px;
    margin: 0 auto;
    background-color: rgba(255, 133, 139, 1);
`;

export const Header = () => {
    return (
        <HeaderComponent>
            <Logo />
        </HeaderComponent>
    );
};
