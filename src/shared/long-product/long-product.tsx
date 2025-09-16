import React, { FC } from 'react';
import cn from 'clsx';
import './long-product.css';
import AddToBasketButton from '../add-to-basket-button/add-to-basket-button';
import { useAuth } from '../../context/auth-provider/AuthProvider';
import { Product } from '../../models/product/product';

import { Button } from 'antd';

export interface LongProductProps {
    product: Product
    onAddToBasket?: (product: Product) => void
    onEditProduct?: (product: Product) => void
};

/**
 * Компонент полного отображения товара
 */
const LongProduct: FC<LongProductProps> = ({ product, onAddToBasket, onEditProduct }) => {
    const { isAdmin } = useAuth()

    const handleAddToBasket = () => {
        onAddToBasket(product)
    }

    const handleEditProduct = () => {
        onEditProduct(product)
    }

    return (
        <div className={cn('long-product')}>
            <div className={cn('image')}>
                <img src={product.photo} alt="image" />
            </div>
            <div className={cn('product')}>
                {/* <div className={cn('category')}>{product.category.name}</div> */}
                <div className={cn('long-string', 'name')}>{product.name}</div>
                <div className={cn('long-string', 'desc')}>{product.desc}</div>
            </div>

            <div className={cn('basket')}>
                <div className={cn('price')}>{product.price}</div>
                <AddToBasketButton count={0} onClick={handleAddToBasket}>В корзину</AddToBasketButton>
                { isAdmin() &&
                    <Button onClick={handleEditProduct}>Ред-ть</Button>
                }
            </div>
        </div>
    );
};

export default LongProduct;