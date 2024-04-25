import React, { FC } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Header } from '../../components/header/header';

export const CommonScreen: FC = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
