import React from "react";
import cn from "clsx";
import './product-in-basket.css';
import imageDelete from '../../images/button-delete-in-basket.svg';
import { BasketButton } from '../../components/button-basket/BasketButton';

interface ProductBasketProps {
    image: string
    price: string
    title: string
    counter: number
}

const ProductInBasket: React.FC<ProductBasketProps> = ({ image, price, title, counter}) => {

    return (
        <>
            <div className={cn('product-in-basket-container')}>
                <div className={cn('product-in-basket-button-delete-container')}>
                    <button className={cn('product-in-basket-button-delete')}>
                        <img src={imageDelete} alt={'delete-button'}/>
                    </button>
                </div>
                <div className={cn('product-in-basket-description-container')}>
                    <div className={cn('product-in-basket-image-container')}>
                        <img src={image} alt={"product-image"}/>
                    </div>
                    <div className={cn('product-in-basket-description')}>
                        <div>
                            <div className={cn('product-in-basket-title')}>
                                <span>{title}</span>
                            </div>
                            <div className={cn('product-in-basket-tag')}>
                                <span className={cn('product-in-basket-tag-text')}>В наличии</span>
                            </div>
                        </div>
                        <div className={cn('product-in-basket-button-counter')}>
                            <BasketButton counter={counter}/>
                        </div>
                        <div className={cn('product-in-basket-price')}>
                            <span className={cn('product-in-basket-price-text')}>{price}</span>
                        </div>

                    </div>
                </div>
            </div>
        </>)
}

export default ProductInBasket;