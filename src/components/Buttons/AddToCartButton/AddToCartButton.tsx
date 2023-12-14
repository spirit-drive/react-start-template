import React, { FC, ReactElement } from 'react';
import './AddToCartButton.scss';

interface IAddToCartButton {
  /**
   * Если счётчик равен нулю, это кнопка, если больше нуля, то это инпут
   * с отображением количества товара и двумя кнопками по краям (увеличения/уменьшения)
   */
  counter?: number;
}

/**
 *  Компонент Кнопка "в корзину". Компонент принимает в качестве пропса счетчик, если счетчик равен нулю, это кнопка,
 *  если больше нуля, то это инпут с отображением количества товара и двумя кнопками по краям (увеличения/уменьшения).
 *  Пока обработчиков не надо
 */
export const AddToCartButton: FC<IAddToCartButton> = ({ counter = 0 }): ReactElement => {
  return (
    <div className="product-add2cart">
      <div className="input-group">
        {counter > 0 ? (
          <>
            <button className="btn btn-warning">
              <i className="fa-sharp fa-solid fa-minus"></i>
            </button>
            <input className="form-control" type="text" value={counter} disabled />
            <button className="btn btn-warning">
              <i className="fa-sharp fa-solid fa-plus"></i>
            </button>
          </>
        ) : (
          <button className="btn btn-warning">
            <i className="fas fa-shopping-cart"></i> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
