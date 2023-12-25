import React from "react";
import classNames from './diplayProductBasket.module.css';
import clsx from "clsx";

const DisplayProductBasket = ({coast, img, title, shortDescription}) => {
    return (
        <div className={clsx(classNames.displayProductWrapper)}>
            <h3 className={clsx(classNames.title)}>{title}</h3>
            <div className={clsx(classNames.about)}>
                <div className={clsx(classNames.imgContainer)}>
                    <img src={img} alt="productImg"/>
                </div>
                <div className={clsx(classNames.info)}>
                    <p className={clsx(classNames.description)}>{shortDescription}</p>
                    <div className={clsx(classNames.buyProduct)}>
                        <span>{coast}&#8381;</span>
                        <button>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayProductBasket