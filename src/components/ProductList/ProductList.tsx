import React from "react";
import classNames from './productList.module.css'
import clsx from "clsx";
import { useStore } from "../../helper/useStore";
import DisplayProduct from "../../components/DisplayProduct/DisplayProduct";
import {DisplayProductProps} from "../../types";

const ProductList = () => {
    const { products } = useStore();

    return (
        <section className={clsx(classNames.productList)}>
            {products.map((product: DisplayProductProps) => {
                return <DisplayProduct
                            key={product.key}
                            coast={product.coast}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            description={product.description}/>
            })}
        </section>
    )
}

export default ProductList;