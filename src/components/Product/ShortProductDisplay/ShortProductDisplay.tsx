import React, { FC, ReactElement } from "react";
import "./ShortProductDisplay.sass";
import { ProductProps } from "../ProductPropsInterface";

/**
 * Компонент краткого отображения товара. Содержит стоимость, изображение, название, описание (обрезанно) - все это он получает из пропсов. Также пока не активная кнопка "в корзину"
 */
export const ShortProductDisplay: FC<ProductProps> = ({product}): ReactElement => {
    const {name, photos, desc, oldPrice, price} = product;
    return (
        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
            <div className="product-card">
                <div className="product-card-offer">
                    <div className="offer-hit">Hit</div>
                    <div className="offer-new">New</div>
                </div>
                <div className="product-thumb">
                    <a href="product.html"><img src={require(`../photos/${photos[0]}`)} /></a>
                </div>
                <div className="product-details">
                    <h4>
                        <a href="products.html">{name}</a>
                    </h4>
                    <p className="product-excerpt">{desc}</p>
                    <div className="product-bottom-details d-flex justify-content-between">
                        <div className="product-price">
                            <small>{oldPrice}</small>
                            ${price}
                        </div>
                        <div className="product-links">
                            <a href="#" className="btn btn-outline-secondary add-to-cart">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};