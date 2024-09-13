import React from "react"
import s from './AddToCart.module.sass'

interface IAddToCartProps {
    count: number;
    isDisabled: boolean;
}

export const AddToCart = ({ count, isDisabled }: IAddToCartProps) => {

    if (count === 0) {
        return (
            <div className={s.addToCartButton} >
                <button type="button" disabled={isDisabled}>
                    В корзину
                </button>
            </div>
        )
    } else {
        return (
            <div className={s.inputContainer}>
                <button type="button">-</button>
                <input type="text" value={1}/>
                <button type="button">+</button>
            </div>
        )
    }
}