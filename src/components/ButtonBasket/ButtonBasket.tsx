import React, {FC} from "react";
import classNames from './ButtonBasket.module.css'
import clsx from "clsx";
import {ButtonBasketProps} from "src/types";

const ButtonBasket: FC<ButtonBasketProps> = ({productCount}) => {
    if(!productCount) return (
        <button className={clsx(classNames.buttonBasket)}>В корзину</button>
    )

    return (
        <>
            <button className={clsx(classNames.countControl, classNames.minus)}>-</button>
            <input className={clsx(classNames.inputBasket)} type="number" value={productCount}/>
            <button className={clsx(classNames.countControl, classNames.plus)}>+</button>
        </>
    )
}

export default ButtonBasket