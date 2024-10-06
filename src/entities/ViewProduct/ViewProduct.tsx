import React, { FC, useEffect, useRef, useState } from "react";
import s from './ViewProduct.module.sass'
import { Product } from "../../homeworks/ts1/3_write";
import { GroupCollapse } from "../../shared/GroupCollapse";
import { AddToCart } from "../../shared/AddToCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dellFromCart, getCountInCartById, TProductInCartWithCount } from "../../store/slices/productInCartSlice";
import { useAppSelector } from "../../store/hooks";
import { useForm } from "react-hook-form";

export interface IViewProductProps {
    product: Product;
    isLast: boolean;
    isEditMode: boolean;
    nextPage: () => void;
}

export const ViewProduct: FC<IViewProductProps> = ({ product, isLast, isEditMode, nextPage }) => {
    const dispatch = useDispatch();
    const productListInCart = useAppSelector(state => state.productInCartSlice.productList);
    const countInCart = getCountInCartById(productListInCart, product.id);

    const imageRef = useRef();
    const containerRef = useRef();
    const [isGroupOpen, setIsGroupOpen] = useState(false);

    const { register, handleSubmit } = useForm({
        defaultValues: { ...product }
    });

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
    }, [containerRef]);

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log('data: ' + JSON.stringify(data));
        })
        }
        >
            <div className={s.container} ref={containerRef}>
                <div className={s.imageContainer}>
                    <img ref={imageRef} className={s.image} src={product.photo} />
                </div>

                <div className={s.containerFlexColumn}>
                    <label>Наименование</label>
                    <input
                        {...register('name')}
                        disabled={isEditMode == false}
                    />
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
                        <input {...register('price')} disabled={isEditMode == false} />

                    </div>

                    {product.category &&
                        <div className={s.containerFlexColumn}>
                            <label>Категория:</label>
                            {product.category.name}
                        </div>
                    }
                    <div className={s.containerFlexColumn}>
                        <label>Описание</label>
                        <textarea {...register('desc')} disabled={isEditMode == false} ></textarea>
                    </div>

                </GroupCollapse>

                {isEditMode ?
                    <button type="submit" >Сохранить</button>
                    :
                    <div className={s.addToCartButton}>
                        <AddToCart
                            className={s.addToCartButton}
                            count={countInCart}
                            isDisabled={false}
                            photo={product.photo}
                            imageRef={imageRef}
                            onAddToCart={() => {
                                const newValue = countInCart + 1;
                                const addProductCount: TProductInCartWithCount = { ...product, count: newValue }
                                dispatch(addToCart(addProductCount));
                            }}
                            onDellFromCart={() => {
                                const newValue = countInCart - 1;
                                if (newValue == 0) {
                                    dispatch(dellFromCart(product.id))
                                } else {
                                    const addProductCount: TProductInCartWithCount = { ...product, count: newValue }
                                    dispatch(addToCart(addProductCount));
                                }
                            }}
                        />
                    </div>
                }

            </div >
        </form>
    );
}