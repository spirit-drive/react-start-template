import React, { ReactElement, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Account } from '../pages/Account';
import { AddProduct } from '../pages/AddProduct';
import { Auth } from 'src/pages/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { programActions } from './redux/program';
import { ProtectedRoute } from '../helper/ProtectedRoute';
import { Register } from 'src/pages/Register';
import { ApolloProvider } from '@apollo/client';
import client from 'src/helper/connections/client';
import {Category} from '../pages/Category'

function App(): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(programActions.initialise());
  }, [dispatch]);
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <LocalizationInitiator />
          <Layout>
            <Header />
            <Routes>
              <Route
                path="account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path="cart" element={<Cart />} />
              <Route path="" element={<Home />} />
              <Route
                path="productAdd"
                element={
                  <ProtectedRoute>
                    <AddProduct />
                  </ProtectedRoute>
                }
              />
                            <Route
                path="category"
                element={
                  <ProtectedRoute>
                    <Category />
                  </ProtectedRoute>
                }
              />
              <Route path="auth" element={<Auth />} />
              <Route path="register" element={<Register />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
