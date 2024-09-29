import React, { FC, useEffect, useRef, useState } from "react";
import s from './ViewProduct.module.sass'
import { Category } from "../../homeworks/ts1/3_write";
import { GroupCollapse } from "../../shared/GroupCollapse";
import { AddToCart } from "../../shared/AddToCart";

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

        const imageRef = useRef();
        const containerRef = useRef();
        const [isGroupOpen, setIsGroupOpen] = useState(false);
        const [countInCart, setCountInCart] = useState(0);

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
                    <img ref={imageRef} className={s.image} src={photo} />
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
                    <AddToCart
                        className={s.addToCartButton}
                        count={countInCart}
                        isDisabled={false}
                        photo={photo}
                        imageRef={imageRef}
                        onAddToCart={() => { setCountInCart(prev => prev + 1) } }
                        onDellFromCart={() => { setCountInCart(prev => prev - 1) }}
                    />
                </div>
            </div >
        );
    }