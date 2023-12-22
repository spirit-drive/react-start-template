import React, { FC, ReactElement } from 'react';
import { Product } from '../types';
import { ShortProductDisplay } from '../ShortProductDisplay';

type ProductList = {
  /** Массив объектов. В каждом объекте хранится информация об одном товаре */
  products: Product[];
};

/**
 * Комонент списка товаров. Этот компонент принимает массив данных
 * и выводит список их компонентов-товаров
 * @param products - Массив товаров;
 * @returns ReactElement;
 */
export const ProductList: FC<ProductList> = ({ products }): ReactElement => {
  return (
    <section className="featured-products">
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="section-title">
              <span>Рекомендуемые товары</span>
            </h2>
          </div>
        </div>
        <div className="row">
          {products.map(function (product) {
            const { id, name, photos, desc, oldPrice, price, properties } = product;
            const { hit, nеw } = properties;
            return (
              <ShortProductDisplay
                key={id}
                name={name}
                photo={photos[0]}
                desc={desc}
                oldPrice={oldPrice}
                price={price}
                hit={hit}
                nеw={nеw}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
