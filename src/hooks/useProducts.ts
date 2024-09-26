import { useEffect, useState } from 'react';
import { Product, generateRandomProduct } from '../components/Product/types';
const maxProductsCount = 2000;

const getProducts = (count = 0) => {
  let index = 0;
  const newProducts: Product[] = [];

  if (count == 0) {
    count = maxProductsCount;
  }

  while (index < count) {
    const currentDate = new Date();
    const product = generateRandomProduct(currentDate.toDateString());
    newProducts.push(product);
    index++;
  }
  return newProducts;
};
const getRandomProduct = (): Product => {
  const currentDate = new Date();
  return generateRandomProduct(currentDate.toDateString());
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => getProducts());

  const getNextProducts = () => {
    const nextProducts = getProducts();
    setProducts(products.concat(nextProducts));
  };

  return { products, getNextProducts, setProducts, getProducts, getRandomProduct };
};
