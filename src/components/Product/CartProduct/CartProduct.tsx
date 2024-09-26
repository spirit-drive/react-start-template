import React, { FC } from 'react';
import s from './CartProduct.module.sass';
import { CartProductModel } from '../../../types/CardProductTypes';
import { ButtonBasket } from 'src/components/Buttons/ButtonBasket/ButtonBasket';
import { Button } from 'src/components/Buttons/Button/Button';

const CartProduct: FC<CartProductModel> = ({ image, title, count, cost, style }) => {
  return (
    <div className={s.cartProduct} style={style}>
      <img className={s.cartProduct__image} src={image} alt={title} />
      <div className={s.cartProduct__info}>
        <span>{title}</span>
        <span>{cost}</span>
      </div>
      <div className={s.cartProduct__buttons}>
        <ButtonBasket counter={count} />
        <Button size="small" variant="danger" title="Удалить">
          <i className="fas fa-trash"></i>
        </Button>
      </div>
    </div>
  );
};

export { CartProduct, type CartProductModel };
