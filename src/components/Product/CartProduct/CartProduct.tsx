import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './CartProduct.module.sass';
import { CartProductModel } from '../../../types/CardProductTypes';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { Button } from 'src/components/Buttons/Button/Button';
import { AppState } from 'src/app/store/store';
import { cartActions } from 'src/app/store/cart';

export const CartProduct: FC<CartProductModel> = ({ id, image, title, cost, count }) => {
  const dispatch = useDispatch();
  const cart = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const product = cart.products.find((p) => p?.product?.id == id);
  const cnt = cart.products?.length ?? 0;

  const onDelete = () => {
    dispatch(cartActions.delete({ productId: id, count: count }));
  };

  return (
    <>
      {cnt > 0 && (
        <div className={s.cartProduct}>
          <img className={s.cartProduct__image} src={image} alt={title} />
          <div className={s.cartProduct__info}>
            <span>{title}</span>
            <span>{cost}</span>
          </div>
          <div className={s.cartProduct__buttons}>
            <ButtonBasket key={product.product.id} product={product.product} />
            <Button size="small" variant="clean" title="Удалить" onClick={onDelete}>
              <i className="fas fa-trash"></i>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
