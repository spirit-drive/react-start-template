import clsx from 'clsx';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import ModalController from '../../components/ModalController/ModalController';
import ProductList from '../../components/ProductList/ProductList';
import { useLogin } from '../../helper/useLogin';
import { useTheme } from '../../helper/useTheme';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import classNames from './layout.module.css';

const Layout: FC = () => {
  const { isLogin } = useLogin();
  const { theme } = useTheme();
  const classes = `contentBox-${theme}`;
  return (
    <>
      <Header />
      <div className={clsx(classes, classNames.general)}>
        {isLogin ? (
          <>
            <ModalController /> <ProductList />
          </>
        ) : (
          <RegistrationForm />
        )}
      </div>
    </>
  );
};

export default Layout;
