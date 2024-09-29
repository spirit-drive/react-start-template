import React, { useState } from "react"
import { Layout } from "../../shared/Layout"
import { ProductInCart } from "../../shared/ProductInCart"

export const CartPage = () => {
    const [productName, setProductName] = useState<string[]>(["Кран"]);

    const handleOnDeleteFromCart = () => {
        setProductName([]);
    }

    return (
        <Layout>
            {productName &&
                productName.map(p => {
                    return (
                        <ProductInCart key={p} productName={p} onDeleteFromCart={handleOnDeleteFromCart}
                        />
                    );

                })}
        </Layout>
    )
}