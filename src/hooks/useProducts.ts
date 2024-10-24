import { useEffect, useState } from 'react';
import { Product } from '../components/Product/types';
import { getProducts } from 'src/shared/api/products';

export const useProducts = (pageSize?: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getProducts(pageSize, pageNumber).then((data) => {
      console.log("get prod", data)
      if (data && data.data) {
        setProducts(data.data);
        setMaxPage(data.pagination.total / data.pagination.pageSize);
      }
    });
  }, [getProducts]);

  const getNextProducts = () => {
    if (pageNumber >= maxPage) {
      return;
    }
    setPageNumber(pageNumber + 1);
    getProducts(pageSize, pageNumber + 1).then((data) => setProducts((products) => [...products, ...data.data]));
  };

  return {
    products,
    getNextProducts,
  };
};
