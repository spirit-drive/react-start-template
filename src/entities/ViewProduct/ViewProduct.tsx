import React, { FC, useEffect, useRef, useState } from "react";
import s from './ViewProduct.module.sass'
import { AddToCart } from "./components/AddToCart";
import { Category } from "../../homeworks/ts1/3_write";
import { GroupCollapse } from "../../shared/GroupCollapse";

export interface IViewProductProps {
    name: string;
    photo: string;
    price: number;
    desc?: string;
    category?: Category;
    isLast: boolean;
    nextPage: () => void;
}

export const ViewProduct: FC<IViewProductProps> =
    ({ name, photo, price, desc, category, isLast, nextPage }) => {

        const containerRef = useRef();
        const [isGroupOpen, setIsGroupOpen] = useState(false)

        useEffect(() => {
            if (containerRef.current) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (isLast && entry.isIntersecting) {
                            nextPage();
                            observer.unobserve(entry.target);
                        }
                    })

                observer.observe(containerRef.current)
            }
        }, [containerRef])


        return (
            <div className={s.container} ref={containerRef}>
                <div className={s.imageContainer}>
                    <img className={s.image} src={photo} />
                </div>

                <div className={s.containerFlexColumn}>
                    <label>Наименование</label>
                    <input value={name} />
                </div>

                <GroupCollapse 
                    className={s.groupCollapse}
                    title="Подробнее"
                    isOpen={isGroupOpen}
                    onToggleOpenClick={
                        () => setIsGroupOpen((prev: boolean) => !prev)
                    }>
                    <div className={s.containerFlexColumn}>
                        <label>Стоимость</label>
                        <input value={price} />
                    </div>

                    {category &&
                        <div className={s.containerFlexColumn}>
                            <label>Категория:</label>
                            {category.name}
                        </div>
                    }
                    <div className={s.containerFlexColumn}>
                        <label>Описание</label>
                        <textarea value={
                            desc
                        }></textarea>
                    </div>

                </GroupCollapse>
                <div className={s.addToCartButton}>
                    <AddToCart className={s.addToCartButton} count={0} isDisabled={true} />
                </div>
            </div >
        );
    }