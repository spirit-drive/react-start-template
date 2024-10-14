import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Product } from '../types';
import { ShortProductCard } from '../ShortProductCard';
import { useProducts } from 'src/hooks/useProducts';
type ProductList = {
  products?: Product[];
};

export const ProductList: FC<ProductList> = ({ products }): ReactElement => {
  const [productsArray, setProductsArray] = useState(products);
  const { getStaticProducts } = useProducts();

  // useEffect(() => {
  //   const cards = document.getElementsByClassName('product-card');
  //   if (cards?.length > 0) lastCardObserver.observe(cards[cards.length - 1]);
  // }, [productsArray]);

  // const lastCardObserver = new IntersectionObserver((entries) => {
  //   entries.forEach(({ isIntersecting }) => {
  //     isIntersecting && setProductsArray([...productsArray, getProducts(1)[0]);
  //   });
  // }, {});

  return (
    <section className="container-fluid p-5">
      <div className="row">
        {productsArray?.length > 0 &&
          productsArray.map(({ id, name, photo, desc, oldPrice, price, createdAt, category }) => {
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
