import React from "react";
import classNames from './button.module.css';
import clsx from "clsx";
import {createRandomProduct} from "../../homeworks/ts1/3_write";
import {useStore} from "../../helper/useStore";

export const ButtonCreateProduct = () => {
    const { addProduct } = useStore();
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
        addProduct(validProduct)
    }

    return <button className={clsx(classNames.button)} onClick={handleRandomProduct}>Create product</button>
};