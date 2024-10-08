import React, { FC, ReactElement } from 'react';
import './ShortProductCard.scss';
import { Product } from '../types';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app/redux/store';
import { cartActions } from '../../../app/redux/cart';

export const ShortProductCard: FC<Product> = (product): ReactElement => {
  const { id, name, photo, desc, oldPrice, price, createdAt } = product;
  const dispatch = useDispatch();
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const count = cart.products.find((p) => p.productId == id)?.count ?? 0;
  const onIncrement = () => {
    dispatch(cartActions.add(id));
  };

  const onDecrement = () => {
    dispatch(cartActions.delete({ productId: id, count: 1 }));
  };

  const onAdd = () => {
    dispatch(cartActions.add(id));
  };

  return (
    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
      <div className="product-card">
        <div className="product-thumb">
          <a href="product.html">
            <img src={photo} />
          </a>
        </div>
        <div className="product-details">
          <h4>
            <a href="products.html">{name}</a>
          </h4>
          <p className="product-excerpt">{desc}</p>
          <div className="product-bottom-details d-flex justify-content-between">
            <div className="product-price">
              RUB {price} <small>{oldPrice}</small>
            </div>
            <div className="product-links">
              {/* <a href="#" className="btn btn-outline-primary add-to-cart">
                <i className="fas fa-shopping-cart"></i>
              </a> */}
              <ButtonBasket count={count} onClick={onAdd} onIncrement={onIncrement} onDecrement={onDecrement} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
