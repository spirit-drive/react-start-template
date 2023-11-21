import React from "react";
import "./AddToCartButton.sass";

export const AddToCartButton = ({counter}) => {
    return (
        <div className="product-add2cart">
            <div className="input-group">
                {counter > 0
                    ? 
                    <>
                        <button className="btn btn-warning"><i class="fa-sharp fa-solid fa-minus"></i></button>
                        <input type="text" className="form-control" value={counter} disabled/>
                        <button className="btn btn-warning"><i class="fa-sharp fa-solid fa-plus"></i></button>
                    </>
                    :
                    <button class="btn btn-warning"><i class="fas fa-shopping-cart"></i> Add to cart</button>
                }
            </div>
        </div>
    );
};