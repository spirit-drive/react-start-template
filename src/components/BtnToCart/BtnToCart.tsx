import React, {FC} from "react";
import cn from "clsx";
import "./BtnToCart.scss"
import IconToCart from "./icon_addcart.svg";

interface IBtnToCart extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    counter: number,
}

export const BtnToCart:FC<IBtnToCart> = (props) => {

    return (
        <div className={cn('container__add-to-cart')}>
            {props.counter === 0 ? (
                <button className={cn('btn','btn__to-cart')} {...props}>
                    <IconToCart/>в корзину
                </button>
            ) : (
                <div className={cn('container__btn-counter')}>
                    <button className={cn('btn','btn__action-plus')}>-</button>
                    <input type="text" value="" className={cn('input','input__to-cart')} />
                    <button className={cn('btn','btn__action-minus')}>+</button>
                </div>
            )}
        </div>
    );
};