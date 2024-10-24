import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CartProduct.module.sass';
import { CartProductModel } from '../../../types/CardProductTypes';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { Button } from 'src/components/Buttons/Button/Button';
import { AppState } from '../../../app/redux/store';
import { cartActions } from '../../../app/redux/cart';

const CartProduct: FC<CartProductModel> = ({ id, image, title, cost, style }) => {
  const dispatch = useDispatch();
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const count = cart.products.find((p) => p.productId == id)?.count ?? 0;
  
  const onIncrement = () => {
    dispatch(cartActions.add(id));
  };

  const onDecrement = () => {
    dispatch(cartActions.delete({ productId: id, count: 1 }));
  };

  const onDelete = () => {
    dispatch(cartActions.delete({ productId: id, count: count }));
  };

  return (
    <>
      {count > 0 && (
        <div className={s.cartProduct} style={style}>
          <img className={s.cartProduct__image} src={image} alt={title} />
          <div className={s.cartProduct__info}>
            <span>{title}</span>
            <span>{cost}</span>
          </div>
          <div className={s.cartProduct__buttons}>
            <ButtonBasket count={count} onDecrement={onDecrement} onIncrement={onIncrement} />
            <Button size="small" variant="danger" title="Удалить" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export { CartProduct, type CartProductModel };
