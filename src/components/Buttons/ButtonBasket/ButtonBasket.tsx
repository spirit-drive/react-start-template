import React, { FC, ReactElement } from 'react';
import './ButtonBasket.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'src/app/store/store';
import { cartActions } from 'src/app/store/cart';
import { Product } from 'src/types/ProductTypes';

interface IButtonBasket {
  text?: string;
  product: Product;
}

export const ButtonBasket: FC<IButtonBasket> = ({ text, product }): ReactElement => {
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const cartItem = cart.products?.find((p) => p?.product?.id == product?.id);
  const dispatch = useDispatch();
  const onIncrement = () => {
    dispatch(cartActions.add(product));
  };

  const onDecrement = () => {
    dispatch(cartActions.delete({ productId: product?.id, count: 1 }));
  };

  const onAdd = () => {
    dispatch(cartActions.add(product));
  };

  return (
    <div className="add2cart">
      <div className="input-group">
        {cartItem?.count > 0 ? (
          <>
            <button className="btn" onClick={onDecrement}>
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={cartItem.count} disabled />
            <button className="btn" onClick={onIncrement}>
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </>
        ) : (
          <button className="btn" onClick={onAdd}>
            <i className="fas fa-shopping-cart"></i>
            {text || ''}
          </button>
        )}
      </div>
    </div>
  );
};
