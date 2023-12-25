import React from "react";
import classNames from './shortDisplayProduct.module.css'
import clsx from "clsx";
import ButtonBasket from "src/components/ButtonBasket/ButtonBasket";

const ShortDisplayProduct = ({coast, img, title, shortDescription}) => {
    return (
        <div className={clsx(classNames.shortDisplayProductWrapper)}>
            <h3 className={clsx(classNames.title)}>{title}</h3>
            <div className={clsx(classNames.about)}>
                <div className={clsx(classNames.imgContainer)}>
                    <img src={img} alt="productImg"/>
                </div>
                <div className={clsx(classNames.info)}>
                    <p className={clsx(classNames.description)}>{shortDescription}</p>
                    <div className={clsx(classNames.buyProduct)}>
                        <span>{coast}&#8381;</span>
                        <ButtonBasket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortDisplayProduct