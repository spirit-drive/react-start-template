import React, {FC} from "react";
import cn from "clsx";
import "./Card.scss"
import {BtnToCart} from "../BtnToCard/BtnToCart";
import {priceFormat} from "../utils";

interface ICard {
    image: string[],
    name: string,
    description: string,
    price: string | number
}

export const Card: FC<ICard> = ({image, name, description, price}) => {
    const descCrop: string = description.slice(0, 150);

    return (
        <div className={cn('card')}>
            <img className={cn('card__picture')} src={image[0]} alt=""/>
            <h3 className={cn('card__name')}>{name}</h3>
            <p className={cn('card__description')}>{descCrop}...</p>
            <div className={cn('card__price')}>цена: {priceFormat(price)} ₽</div>
            <BtnToCart counter={0} disabled/>
        </div>
    )
}