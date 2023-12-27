import React, {FC} from "react";
import cn from "clsx";
import "./BtnDelCart.scss"
import IconDelCart from "./icon__delcart.svg";

export const BtnDelCart:FC = () => {

    return (
        <button className={cn('btn__del-cart')}>
            <IconDelCart />
        </button>
    );
};