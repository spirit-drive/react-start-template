import React, { FC, ReactElement } from 'react';
import './ShortProductCard.scss';
import { Product } from 'src/types/ProductTypes';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from 'src/app/constants/router';

interface ProductItemProps {
  product: Product | null;
}

export const ShortProductCard: FC<ProductItemProps> = (item): ReactElement => {
  const { product } = item;

  return (
    <div className="product-card m-2">
      <Link to={ROUTER_PATH.PRODUCT(product.id)}>
        <div className="product-thumb">
          <img src={product.photo} />
        </div>
      </Link>
      <div className="product-details">
        <h4>
          {product.name} {product.categoryId}
        </h4>
        <p className="product-excerpt">{product.desc}</p>
        <div className="product-bottom-details d-flex justify-content-between">
          <div className="product-price">
            RUB {product.price} <small>{product.oldPrice}</small>
          </div>
          <div className="product-links">
            <ButtonBasket product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};
