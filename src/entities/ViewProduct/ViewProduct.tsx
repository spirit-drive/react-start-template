import React, { ReactNode } from "react"
import { FC } from "react"
import s from './ViewProduct.module.sass'
import { AddToCart } from "./components/AddToCart";
import { DrawingIcon } from "../../shared/DrawingIcon";

export interface IViewProductProps {
    productName: string;
    image: ReactNode;
    cost: number;
    describe: string;
    nameCategory?: string;
}

export const ViewProduct: FC<IViewProductProps> = ({
    productName, image, cost, describe, nameCategory }) => {
    return (
        <div>
            <div className={s.image}>
                {image}
            </div>
            
            <div className={s.containerFlexRow}>
                <label>Наименование</label>
                <input value={productName} />
            </div>

            <div className={s.containerFlexRow}>
                <label>Стоимость</label>
                <input value={cost} />
            </div>

            {nameCategory &&
                <div className={s.containerFlexRow}>
                    <label>Категория:</label>
                    {nameCategory}
                </div>
            }
            <div className={s.containerFlexRow}>
                <label>Описание</label>
                <textarea value={
                    describe
                }></textarea>
            </div>
            <AddToCart count={0} isDisabled={true} />
        </div>
    );
}