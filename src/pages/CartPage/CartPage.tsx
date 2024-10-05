import React, { useState } from "react"
import { Layout } from "../../shared/Layout"
import { ProductInCart } from "../../shared/ProductInCart"
import { useDispatch } from "react-redux"
import { dellFromCart } from "../../store/slices/productInCartSlice"
import { useAppSelector } from "../../store/hooks"

export const CartPage = () => {
    const productInCart = useAppSelector(state => state.productInCartSlice.productList)
    const dispatch = useDispatch();

    const handleOnDeleteFromCart = (id: string) => {

        dispatch(dellFromCart(id));
    }

    return (
        <Layout>
            {productInCart && productInCart.length == 0 ?

                <div>{'В корзине пусто'}</div>
                :
                <div>
                    {productInCart.map(p => {
                        return (
                            <ProductInCart key={p.id} product={p} onDeleteFromCart={handleOnDeleteFromCart}
                            />
                        );

                    })}
                    <button type="button">Купить</button>
                </div>
            }
        </Layout>
    )
}