import React from "react";
import classNames from './displayProduct.module.css'
import clsx from "clsx";
import ButtonBasket from "src/components/ButtonBasket/ButtonBasket";

const DisplayProduct = ({coast, category, img, title, description}) => {
    return (
        <div className={clsx(classNames.DisplayProductWrapper)}>
            <h3 className={clsx(classNames.title)}>{title}</h3>
            <div className={clsx(classNames.about)}>
                <div className={clsx(classNames.imgContainer)}>
                    <img src={img} alt="productImg"/>
                </div>
                <div className={clsx(classNames.info)}>
                    <p className={clsx(classNames.category)}>Категория: {category}</p>
                    <p className={clsx(classNames.description)}>{description}</p>
                    <div className={clsx(classNames.buyProduct)}>
                        <span>{coast}&#8381;</span>
                        <ButtonBasket />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProduct