import React, { ReactElement } from 'react';
import './App.css';
import { Layout } from '../components/Layout/Layout';
import { Header } from '../components/Header/Header';
import { LocalizationInitiator } from 'src/localization/LocalizationInitiator';
import { ProductList } from '../components/Product/ProductList';
import { Product, generateRandomProduct } from '../components/Product/types';

// const productList:Product[] = [
//   {
//     id: 1,
//     name: 'Ноутбук 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consecteturProduct 1 Lorem ipsum dolor, sit amet consectetur',
//     photos: ["0.jpg"],
//     desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
//     createAt: '01.01.2023 23:59:59',
//     oldPrice: 65000,
//     price: 55000,
//     category: { id: 1, name: 'Ноутбуки', photo: '' },
//   },
//   {
//     id: 2,
//     name: 'Ноутбук 2',
//     photos: ["1.jpg"],
//     desc: 'Lorem ipsum, dolor',
//     createAt: '01.01.2023 23:59:59',
//     oldPrice: '',
//     price: 65000,
//     category: { id: 2, name: 'Ноутбуки', photo: '' },
//   },
//   {
//     id: 3,
//     name: 'Телефон 3 Lorem ipsum.',
//     photos: ["2.jpg"],
//     desc: 'Lorem ipsum',
//     createAt: '01.01.2023 23:59:59',
//     oldPrice: '',
//     price: 100000,
//     category: { id: 3, name: 'Телефоны', photo: '' },
//   },
//   {
//     id: 4,
//     name: 'Телефон 4 Lorem ipsum dolor',
//     photos: ["3.jpg"],
//     desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
//     createAt: '01.01.2023 23:59:59',
//     oldPrice: '',
//     price: 123,
//     category: { id: 3, name: 'Телефоны', photo: '' },
//   },
//   {
//     id: 5,
//     name: 'Телефон 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consecteturProduct 5 Lorem ipsum dolor, sit amet consectetur',
//     photos: ["4.jpg"],
//     desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum,',
//     createAt: '01.01.2023 23:59:59',
//     oldPrice: 70000,
//     price: 16500,
//     category: { id: 3, name: 'Телефон', photo: '' },
//   },
// ];

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
