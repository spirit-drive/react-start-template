import React, { FC, ReactElement } from 'react';
import './ShortProductDisplay.scss';
import { Product, Photo, Properties } from '../types';

/**
 * Компонент краткого отображения товара. Содержит стоимость, изображение, название, описание (обрезанно) - все это он получает из пропсов. Также пока не активная кнопка "в корзину"
 */
export const ShortProductDisplay: FC<
  Pick<Product, 'name' | 'desc' | 'oldPrice' | 'price'> & Photo & Pick<Properties, 'hit' | 'nеw'>
> = ({ name, photo, desc, oldPrice = 0, price = 0, hit = false, nеw = false }): ReactElement => {
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
      <div className="product-card">
        <div className="product-card-offer">
          {hit && <div className="offer-hit">Hit</div>}
          {nеw && <div className="offer-new">New</div>}
        </div>
        <div className="product-thumb">
          <a href="product.html">
            <img src={require(`../photos/${photo}`)} />
          </a>
        </div>
        <div className="product-details">
          <h4>
            <a href="products.html">{name}</a>
          </h4>
          <p className="product-excerpt">{desc}</p>
          <div className="product-bottom-details d-flex justify-content-between">
            <div className="product-price">
              <small>{oldPrice}</small>${price}
            </div>
            <div className="product-links">
              <a href="#" className="btn btn-outline-secondary add-to-cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
