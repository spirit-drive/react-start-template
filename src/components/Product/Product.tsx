import React, {FC} from 'react';
import cn from "clsx";
import "./Product.scss"
import {BtnToCart} from "../BtnToCard/BtnToCart";
import {priceFormat} from "../utils";

interface IProduct {
    image: string[],
    name: string,
    description: string,
    price: number | string,
}

export const Product:FC<IProduct> = ({image, name, description, price}) => {
    const images:React.JSX.Element[] = image.map((image: string, index:number) => <img key={index} className={cn('product__gallery-item')} src={image} alt=""/>);

    return (
        <div className={cn('product')}>
            <div className="product__pictures">
                <img className={cn('product__cover')} src={image[0]} alt=""/>
                <div className="product__gallery-items">
                    {images}
                </div>
            </div>
            <div className="product__info">
                <h3 className={cn('product__name')}>{name}</h3>
                <p className={cn('product__description')}>{description}</p>
                <div className={cn('product__price')}>цена: {priceFormat(price)} ₽</div>
                <BtnToCart counter={0} disabled />
            </div>
        </div>
    );
}