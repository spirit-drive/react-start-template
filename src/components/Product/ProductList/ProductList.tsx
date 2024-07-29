import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Product, generateRandomProduct } from '../types';
import { ShortProductCard } from '../ShortProductCard';

type ProductList = {
  products: Product[];
};

const id = 9;

const createRandomProduct = (products: Product[]): Product => {
  return generateRandomProduct('22');
};

export const ProductList: FC<ProductList> = ({ products }): ReactElement => {
  const [productsArray, setProductsArray] = useState(products);

  useEffect(() => {
    const cards = document.getElementsByClassName('product-card');
    lastCardObserver.observe(cards[cards.length - 1]);
  }, [productsArray]);

  const lastCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      isIntersecting && setProductsArray([...productsArray, createRandomProduct(products)]);
    });
  }, {});

  return (
    <section className="container-fluid pt-5">
      <div className="row">
        {productsArray.map(({ id, name, photo, desc, oldPrice, price, createdAt, category }) => {
          return (
            <ShortProductCard
              key={id}
              name={name}
              photo={photo}
              desc={desc}
              oldPrice={oldPrice}
              price={price}
              id={id}
              category={category}
              createdAt={createdAt}
            />
          );
        })}
      </div>
    </section>
  );
};
