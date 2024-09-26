import React, { ReactElement } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Account } from '../pages/Account';
import { AddProduct } from '../pages/AddProduct';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <LocalizationInitiator />
      <Layout>
        <Header />
        <Routes>
          <Route path="account" element={<Account />} />
          <Route path="cart" element={<Cart />} />
          <Route path="" element={<Home />} />
          <Route path="product/add" element={<AddProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
