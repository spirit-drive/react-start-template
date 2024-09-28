import React from "react";
import cn from 'clsx';
import s from './AddToCart.module.sass';

interface IAddToCartProps {
    className?: string;
    count: number;
    isDisabled: boolean;
}

export const AddToCart = ({ className, count, isDisabled }: IAddToCartProps) => {

    if (count === 0) {
        return (
            <div className={cn(s.addToCartButton, className)} >
                <button type="button" disabled={isDisabled}>
                    В корзину
                </button>
            </div>
        )
    } else {
        return (
            <div className={cn(s.inputContainer, className)}>
                <button type="button">-</button>
                <input type="text" value={1}/>
                <button type="button">+</button>
            </div>
        )
    }
}