import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Product } from '../types';
import { ShortProductDisplay } from '../ShortProductDisplay';

type ProductList = {
  /** Массив объектов. В каждом объекте хранится информация об одном товаре */
  products: Product[];
};

let id = 9;

/** Функция создания случайного продукта */
const createRandomProduct = (products: Product[]): Product => {
  const getId = () => id++;
  const product = structuredClone(products[Math.floor(Math.random() * products.length)]);
  product.id = getId();
  return product;
};

/**
 * Комонент списка товаров. Этот компонент принимает массив данных
 * и выводит список их компонентов-товаров
 * @param products - Массив товаров;
 * @returns ReactElement;
 */
export const ProductList: FC<ProductList> = ({ products }): ReactElement => {
  const [productsArray, setProductsArray] = useState(products);

  useEffect(() => {
    const cards = document.getElementsByClassName('product-card');
    lastCardObserver.observe(cards[cards.length - 1]);
  }, [productsArray]);

  /** Наблюдатель за последней карточкой товара */
  const lastCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting }) => {
      isIntersecting && setProductsArray([...productsArray, createRandomProduct(products)]);
    });
  }, {});

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
          {productsArray.map(({ id, name, photos, desc, oldPrice, price, properties }) => {
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
