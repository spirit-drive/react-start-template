import React, { ReactElement } from 'react';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { ProductList } from '../components/Product/ProductList';
import { Product, generateRandomProduct } from '../components/Product/types';

const productList: Product[] = [
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
  generateRandomProduct('55'),
];

function App(): ReactElement {
  return (
    <>
      <LocalizationInitiator />
      <Layout>
        <Header />
        <div className="app-content">
          <ProductList products={productList} />
        </div>
      </Layout>
    </>
  );
}

export default App;
