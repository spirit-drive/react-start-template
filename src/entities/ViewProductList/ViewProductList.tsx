import React, { FC, useEffect, useState } from "react"
import { Product } from "../../homeworks/ts1/3_write";
import { ViewProduct } from "../ViewProduct/ViewProduct";
import s from './ViewProductList.module.sass';
import { getProductsApi } from "./api/request";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { addToShop } from "../../store/slices/productSlice";

interface IViewProductListProps {
    isEditMode: boolean;
}

export const ViewProductList = ({isEditMode}: IViewProductListProps) => {
    const productList = useAppSelector(state => state.productSlice.productList);
    const dispatcher = useDispatch();

    useEffect(() => {
        const newProducts = getProductsApi();
        newProducts.forEach(p => dispatcher(addToShop(p)));
    }, []);

    const handleNextPage = () => {
        const newProducts = getProductsApi();
        newProducts.forEach(p => dispatcher(addToShop(p)));
    }

    return (
        <div className={s.viewProduct}>
            {
                productList.map((p, index) =>
                    <ViewProduct
                        product={p}
                        key={p.id}
                        isLast={index === productList.length - 1}
                        isEditMode={isEditMode}
                        nextPage={handleNextPage}
                    />)
            }
        </div>
    )
}