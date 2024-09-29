import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '../shared/ThemeProvider';
import { LangProvider } from '../shared/LangProvider/LangProvider';
import { Layout } from '../shared/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { MainPage } from '../pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { CartPage } from '../pages/CartPage/CartPage';
import '../shared/ThemeProvider/ThemeProvider.css'

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="App">
          <Routes>
            <Route path='*' element={<NotFoundPage />} />
            <Route path={"/"} element={<MainPage />} />
            <Route path={"product"} element={<ProductPage />} />
            <Route path={"cart"} element={<CartPage />} />
            <Route path={"profile"} element={<ProfilePage />} />
          </Routes>
        </div>
      </LangProvider> 
    </ThemeProvider>
  );
}

export default App;
