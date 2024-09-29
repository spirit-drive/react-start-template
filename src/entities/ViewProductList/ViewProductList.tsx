import React, { FC, useEffect, useState } from "react"
import { Product } from "../../homeworks/ts1/3_write";
import { ViewProduct } from "../ViewProduct/ViewProduct";
import s from './ViewProductList.module.sass';
import { getProductsApi } from "./api/request";

export const ViewProductList = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    useEffect(() => {
        setProductList(getProductsApi())
    }, []);

    const handleNextPage = () => {
        const newProducts = getProductsApi();
        setProductList(prev => [...prev, ...newProducts])
    }

    return (
        <div className={s.viewProduct}>
            {
                productList.map((p, index) =>
                    <ViewProduct
                        {...p}
                        key={p.id}
                        isLast={index === productList.length - 1}
                        nextPage={handleNextPage}
                    />)
            }
        </div>
    )
}