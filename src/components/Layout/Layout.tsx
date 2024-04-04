import clsx from 'clsx';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';
import { useLogin } from '../../helper/useLogin';
import { useTheme } from '../../helper/useTheme';
import Basket from '../../pages/Basket/Basket';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';
import ModalController from '../ModalController/ModalController';
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
            <Routes>
              <Route path='/modal' element={<ModalController />} />
              <Route
                path="/"
                element={
                  <>
                    <ModalController buttonText="создать товар" />
                    <ProductList />
                  </>
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        ) : (
          <RegistrationForm />
        )}
      </div>
    </>
  );
};

export default Layout;
