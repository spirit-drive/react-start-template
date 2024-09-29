import React from "react"
import s from './ProductInCart.module.sass'

export interface IProductInCart {
    productName: string;
    onDeleteFromCart: () => void;
}

export const ProductInCart = ({ productName, onDeleteFromCart }: IProductInCart) => {

    return (
        <div className={s.itemInCart}>
            <div>
                {productName}
            </div>
            <button type="button" onClick={onDeleteFromCart}>
                Удалить из корзины
            </button>
        </div>
    )

}