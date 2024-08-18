import React, { useEffect, useState } from 'react';
import ProductCard, { IProductCard } from 'src/widgets/product-card/ProductCard';

import styles from './index.module.css';
import { useInView } from 'react-intersection-observer';
import { createRandomProduct } from 'src/homeworks/ts1/3_write';

export const ProductList = ({ productList }: { productList: IProductCard[] }) => {
  const [newList, setNewList] = useState<IProductCard[]>(productList);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      const newProducts: IProductCard[] = [...Array(30)].map(() => {
        const newProduct = createRandomProduct(Date.now().toString());
        return {
          id: newProduct.id,
          title: newProduct.name,
          price: newProduct.price,
          desc: newProduct.desc,
          image_url: 'https://basket-11.wbbasket.ru/vol1610/part161032/161032169/images/c516x688/1.webp',
        };
      });

      setNewList((prev) => [...prev, ...newProducts]);
    }
  }, [inView]);

  return (
    <div className={styles.main}>
      {newList.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
      <div ref={ref}></div>
    </div>
  );
};
