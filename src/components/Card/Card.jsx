import React from "react";
import cn from "clsx";
import "./Card.scss"
import {BtnToCart} from "../BtnToCard/BtnToCart";

export const Card = ({image, name, description, price}) => {
    const descCrop = description.slice(0, 150);
    const priceFormat = (number, thousandsSeparator = ' ') => (
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
    );
    return (
        <div className={cn('card')}>
            <img className={cn('card__picture')} src={image[0]} alt=""/>
            <h3 className={cn('card__name')}>{name}</h3>
            <p className={cn('card__description')}>{descCrop}...</p>
            <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
            <BtnToCart counter={0} disabled />
        </div>
    )
}