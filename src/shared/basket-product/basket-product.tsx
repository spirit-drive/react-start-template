import React, { FC } from 'react';
import cn from 'clsx';
import './basket-product.css';
import { BasketProductType } from 'src/models/basket-product';

export type BasketProductProps = BasketProductType & {
    onRemoveItem: (id: BasketProductType["id"]) => void
};

/**
 * Компонент отображения товара для корзины
 */
const BasketProduct: FC<BasketProductProps> = ({ id, price, photo, name, onRemoveItem }) => {

    const handleOnClick = () => {
        onRemoveItem(id)
    }

    return (
        <div className={cn('basket-product')}>
            <div className={cn('image')}>
                <img src={photo} alt="image" />
            </div>
            <div className={cn('product')}>
                <div className={cn('price')}>{price}</div>
                <div className={cn('short-string', 'name')}>{name}</div>
            </div>

            <div className={cn('basket')}>
                <button
                    type='button'
                    className={cn('basket-button')}
                    onClick={handleOnClick}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default BasketProduct;