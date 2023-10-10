import React from 'react';
import styled from '@emotion/styled';
import { Header } from './Header/Header';

const Container = styled.div`
    width: 100%;
    background-color: rgba(255, 133, 139, 1);
`;

export const Layout = () => {
    return (
        <Container>
            <Header />
        </Container>
    );
};
