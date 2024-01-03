import React from "react";
import './basketButton.css';

export const BasketButton =(props)=>{
    if( props.numberOfGoods == 0){
        return(
            <button className="magasine__basket-button">
                Корзина пуста
            </button>
        );
    }
    if(props.numberOfGoods > 0 ){
        return(
            <button className="magasine__basket-button">
                в корзине { props.numberOfGoods} единиц товара
            </button>
        )

    }

}