import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CartProduct } from '../components/Product/CartProduct/CartProduct';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'src/app/store/store';
import { Button } from 'src/components/Buttons/Button/Button';
import { cartActions } from 'src/app/store/cart';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const { products } = useSelector<AppState, AppState['cart']>((state): AppState['cart'] => state.cart);
  const dispatch = useDispatch();
  const onDeleteAll = () => {
    dispatch(cartActions.clean());
  };

  if (products == null || products?.length <= 0) {
    return (
      <div className="app-content">
        <h4>{t(`cart.empty`)}</h4>
      </div>
    );
  }

  return (
    <div className="app-content">
      <div className="cart">
        {products?.map((cart) => {
          if (cart.product?.id)
            return (
              <CartProduct
                key={cart?.product?.id}
                id={cart?.product?.id}
                title={cart?.product?.name}
                image={cart?.product?.photo}
                cost={cart?.product?.price}
                count={cart?.count}
              />
            );
        })}
        {products?.length > 0 && (
          <div className="w-100 text-center">
            <Button size="small" variant="clean" title="Очистить" onClick={onDeleteAll}>
              <i className="fas fa-trash">
                <span className="mx-2">{t(`cart.clear`)}</span>
              </i>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
