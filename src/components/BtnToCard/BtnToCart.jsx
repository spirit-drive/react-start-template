import React from "react";
import cn from "clsx";
import "./BtnToCart.scss"
import IconToCart from "./icon_addcart.svg";

export const BtnToCart = ({counter, ...props}) => {

    return (
        <div className={cn('container__add-to-cart')}>
            {counter === 0 ? (
                <button className={cn('btn','btn__to-cart')} {...props}>
                    <IconToCart/>в корзину
                </button>
            ) : (
                <div className={cn('container__btn-counter')}>
                    <button className={cn('btn','btn__action-plus')}>-</button>
                    <input type="text" value="1" size="2" className={cn('input','input__to-cart')} />
                    <button className={cn('btn','btn__action-minus')}>+</button>
                </div>
            )}
        </div>
    );
};