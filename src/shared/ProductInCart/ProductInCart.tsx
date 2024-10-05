import React from "react"
import s from './ProductInCart.module.sass'
import { TProductInCartWithCount } from "../../store/slices/productInCartSlice";

export interface IProductInCart {
    product: TProductInCartWithCount;
    onDeleteFromCart: (id: string) => void;
}

export const ProductInCart = ({ product, onDeleteFromCart }: IProductInCart) => {

    const handleDellFromCart = () => {
        onDeleteFromCart(product.id);
    }

    return (
        <div className={s.itemInCart}>
            <div className={s.productName}>{'Имя продукта:'}</div>
            <div>
                {product.name}
            </div>
            <div>{'Количество:'}</div>
            <div>
                {product.count}
            </div>
            <button type="button" onClick={handleDellFromCart}>
                Удалить из корзины
            </button>
        </div>
    )

}