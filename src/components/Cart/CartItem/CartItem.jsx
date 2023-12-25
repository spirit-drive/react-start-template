import React from "react";
import cn from "clsx";
import "./CartItem.scss"
import {BtnDelCart} from "../BtnDelCart/BtnDelCart";

export const CartItem = ({image, name, description, price}) => {
    const descCrop = description.slice(0, 300);
    const priceFormat = (number, thousandsSeparator = ' ') => (
        number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
    );
    return (
        <div className={cn('cart__item')}>
            <img className={cn('cart__item-picture')} src={image[0]} alt=""/>
            <div className={cn('cart__item-info')}>
                <h3 className={cn('cart__item-name')}>{name}</h3>
                <p className={cn('cart__item-description')}>{descCrop}...</p>
            </div>
            <div className={cn('cart__item-price')}>{priceFormat(price)} ₽</div>
            <div className="cart__item-control">
                <BtnDelCart />
            </div>
        </div>
    )
}