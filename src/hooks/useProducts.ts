import { useEffect, useState } from 'react';
import { Product, generateRandomProduct } from '../components/Product/types';
import { Category } from '../components/Product/types';
const maxProductsCount = 2000;

const getStaticProducts = () => {
  const newProducts: Product[] = [];
  const categories: Category[] = [{ id: '1', name: 'Notebook' }];
  newProducts.push({
    id: '1',
    name: 'Notebook',
    photo: require(`../assets/photos/1.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });

  newProducts.push({
    id: '2',
    name: 'Phone',
    photo: require(`../assets/photos/2.jpg`),
    createdAt: 'createdAt',
    price: 15000,
    desc: 'Description',
    category: categories[0],
  });
  newProducts.push({
    id: '3',
    name: 'Phone',
    photo: require(`../assets/photos/3.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });
  newProducts.push({
    id: '4',
    name: 'Phone',
    photo: require(`../assets/photos/4.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });
  newProducts.push({
    id: '5',
    name: 'Phone',
    photo: require(`../assets/photos/5.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });
  newProducts.push({
    id: '6',
    name: 'Phone',
    photo: require(`../assets/photos/5.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });
  newProducts.push({
    id: '7',
    name: 'Phone',
    photo: require(`../assets/photos/5.jpg`),
    createdAt: 'createdAt',
    price: 50000,
    desc: 'Description',
    category: categories[0],
  });
  return newProducts;
};

const getProducts = (count = 0) => {
return getStaticProducts();

  let index = 0;
  const newProducts: Product[] = [];

  if (count == 0) {
    count = maxProductsCount;
  }

  while (index < count) {
    const currentDate = new Date();
    const product = generateRandomProduct(currentDate.toDateString(), index);
    newProducts.push(product);
    index++;
  }
  return newProducts;
};

const getRandomProduct = (): Product => {
  const currentDate = new Date();
  return generateRandomProduct(currentDate.toDateString(), 39995);
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => getProducts());

  const getNextProducts = () => {
    const nextProducts = getProducts();
    setProducts(products.concat(nextProducts));
  };

  return { products, getNextProducts, setProducts, getProducts,  getRandomProduct, getStaticProducts }; //
};
