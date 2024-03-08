import clsx from 'clsx';
import React, { FC } from 'react';
import Header from '../../components/Header/Header';
import ModalController from '../../components/ModalController/ModalController';
import ProductList from '../../components/ProductList/ProductList';
import { useLogin } from '../../helper/useLogin';
import { useTheme } from '../../helper/useTheme';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import classNames from './layout.module.css';
import { Routes, Route } from 'react-router-dom';
import Profile from '../../pages/Profile/Profile';
import Basket from '../../pages/Basket/Basket';
import NotFound from '../../pages/NotFound/NotFound';


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
              <Route path='/' element={
                <>
                  <ModalController buttonText='создать товар' />
                  <ProductList />
                </>
              }/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/basket' element={<Basket />}/>
              <Route path='*' element={<NotFound />}/>
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
