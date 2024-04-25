import React, { FC, ReactNode } from 'react';

import { Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: FC<RouterProviderProps> = ({ children }) => (
  <BrowserRouter>
    <Routes>{children}</Routes>
  </BrowserRouter>
);
