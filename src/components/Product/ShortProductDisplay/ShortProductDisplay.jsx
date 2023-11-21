import React from "react";
import "./ShortProductDisplay.sass";

export const ShortProductDisplay = ({product}) => {
    const {name, photo, desc, oldPrice, price} = product;
    return (
        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
            <div className="product-card">
                <div className="product-card-offer">
                    <div className="offer-hit">Hit</div>
                    <div className="offer-new">New</div>
                </div>
                <div className="product-thumb">
                    <a href="product.html"><img src={require(`../photos/${photo}`)} /></a>
                </div>
                <div className="product-details">
                    <h4>
                        <a href="products.html">{name}</a>
                    </h4>
                    <p className="product-excerpt">{desc}</p>
                    <div className="product-bottom-details d-flex justify-content-between">
                        <div className="product-price">
                            <small>{oldPrice}</small>
                            {price}
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