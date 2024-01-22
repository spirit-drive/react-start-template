import React from "react";
import classNames from './productList.module.css'
import clsx from "clsx";
import { useStore } from "../../helper/useStore";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import {DisplayProductProps} from "../../types";
import {createRandomProduct} from "src/homeworks/ts1/3_write";

const ProductList = () => {
    const { product, addProduct } = useStore();
    const handleRandomProduct = () => {
        const randomProduct = createRandomProduct('now');
        const validProduct = {
            key: Date.now(),
            coast: randomProduct.price,
            category: randomProduct.category.name,
            img: 'http://placehold.it/50x50',
            title: randomProduct.name,
            description: randomProduct.desc,
        }

        addProduct(validProduct);
    }

    return (
        <section className={clsx(classNames.productList)}>
            {product.map((product: DisplayProductProps) => {
                return <DisplayProduct
                            key={product.key}
                            coast={product.coast}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            description={product.description}/>
            })}

            <button onClick={handleRandomProduct}>create product</button>
        </section>
    )
}

export default ProductList;