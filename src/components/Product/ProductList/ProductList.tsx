import React, { FC, ReactElement, useState, useEffect, useRef } from 'react';
import { ShortProductCard } from '../ShortProductCard';
import { GET_PRODUCTS, ProductsData } from 'src/helper/connections/productConnections';
import { commandId } from 'src/app/constants/Api';
import { useQuery } from '@apollo/client';

export const ProductList: FC = (): ReactElement => {
  const { loading, data } = useQuery<ProductsData>(GET_PRODUCTS);
  const products = data?.products?.getMany?.data.filter((x) => x.commandId == commandId);
  const ref = useRef(null);

  return (
    <section className="container-fluid p-5">
      <div className="row">
        {!loading &&
          products?.map(({ id, name, photo, desc, oldPrice, price, createdAt, category }) => {
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
