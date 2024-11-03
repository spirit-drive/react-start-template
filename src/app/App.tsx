import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Account } from '../pages/Account';
import { Login } from 'src/pages/Login';
import { ProtectedRoute } from '../helper/ProtectedRoute';
import { Register } from 'src/pages/Register';
import { Category } from '../pages/Category';
import { ROUTER_PATH } from './constants/router';
import { ProductDetail } from 'src/pages/ProductDetail';

function App(): ReactElement {
  return (
    <>
      <BrowserRouter>
        <LocalizationInitiator />
        <Layout>
          <Header />
          <Routes>
            <Route
              path={ROUTER_PATH.ACCOUNT}
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path={ROUTER_PATH.CART} element={<Cart />} />
            <Route path={ROUTER_PATH.HOME} element={<Home />} />
            <Route
              path={ROUTER_PATH.CATEGORY}
              element={
                <ProtectedRoute>
                  <Category />
                </ProtectedRoute>
              }
            />
            <Route path={ROUTER_PATH.PRODUCT(':id')} element={<ProductDetail />} />
            <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
            <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
