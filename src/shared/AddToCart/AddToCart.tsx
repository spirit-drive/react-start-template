import React, { RefObject, useLayoutEffect, useRef, useState } from "react";
import cn from 'clsx';
import s from './AddToCart.module.sass';
import { ProductIcon } from "./ProductIcon/ProductIcon";

type TImagePosition = {
    top: number;
    left: number;
    width: number;
    height: number;
}

interface IAddToCartProps {
    count: number;
    isDisabled: boolean;
    photo?: string;
    imageRef?: RefObject<HTMLImageElement>;
    className?: string;
    onAddToCart: () => void;
    onDellFromCart: () => void;
}

export const AddToCart = ({ count, isDisabled, photo, imageRef, className, onAddToCart, onDellFromCart }: IAddToCartProps) => {
    const refAddToCart = useRef(null);
    const refButton = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [width, setWidth] = useState(80)

    const handleAddToCart = () => {
        if (count === 0) {
            if (imageRef.current) {
                const startRect = imageRef.current.getBoundingClientRect();
                setStartAnimation(true);
                setTop(startRect.top);
                setLeft(startRect.left);
                setWidth(startRect.width);
            }
        }else{
            onAddToCart();
        }
    }

    const handleAnimationEnd = (event: TransitionEvent) => {
        if (event.propertyName == 'width') {
            setStartAnimation(false);
            onAddToCart();
        }
    }
 
    useLayoutEffect(() => {
        if (refAddToCart.current) {
            refAddToCart.current.addEventListener('transitionend', handleAnimationEnd)
        }
    }, [])

    if (count === 0) {
        return (
            <div ref={refAddToCart} className={cn(s.addToCartButton, className)} >

                {startAnimation && photo &&
                    <ProductIcon
                        photo={photo}
                        isStartPosition={startAnimation}
                        top={top}
                        left={left}
                        width={width}
                        onFirstMountCompleated={() => {
                            if (refButton.current) {
                                const rect: DOMRect = refButton.current.getBoundingClientRect();
                                setTop(rect.top);
                                setLeft(rect.left);
                                setWidth(40);
                            }
                        }}
                    />
                }

                <button ref={refButton} type="button" disabled={isDisabled} onClick={handleAddToCart}>
                    В корзину
                </button>
            </div>
        )
    } else {
        return (
            <div className={cn(s.inputContainer, className)}>
                <button type="button" onClick={onDellFromCart}>-</button>
                <input className={s.input} type="text" value={count} />
                <button type="button" onClick={handleAddToCart}>+</button>
            </div>
        )
    }
}