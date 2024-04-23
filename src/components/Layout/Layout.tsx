import clsx from 'clsx';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useTheme } from '../../helper/useTheme';
import Basket from '../../pages/Basket/Basket';
import Main from '../../pages/Main/Main';
import NotFound from '../../pages/NotFound/NotFound';
import Profile from '../../pages/Profile/Profile';
import ModalController from '../ModalController/ModalController';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SignUp from '../SignUp/SignUp';
import classNames from './layout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Layout: FC = () => {
  const isLogin = useSelector((store: RootState) => store.loginSlice.isLogin);
  const { theme } = useTheme();
  const classes = `contentBox-${theme}`;

  return (
    <>
      <Header />
      <div className={clsx(classes, classNames.general)}>
        {isLogin ? (
          <>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/modal" element={<ModalController />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </>
        ) : (
          <div className={clsx(classNames.formWrapper)}>
            <RegistrationForm />
            <SignUp />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
