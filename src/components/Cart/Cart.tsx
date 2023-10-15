import React from 'react';

import './cart.scss';

type Props = {
    /** Number of goods */
    count: number;
    /** Disabled prop */
    disabled: boolean;
};

export const Cart = ({ count = 0, disabled = false }: Props): React.ReactElement => {
    return (
        <div className="cart">
            {count === 0 ? (
                <button className="cart_button" disabled={disabled}>
                    Добавить в корзину
                </button>
            ) : (
                <div className="handleBlock">
                    <button className="cart_button">-</button>
                    <span>{count}</span>
                    <button className="cart_button">+</button>
                </div>
            )}
        </div>
    );
};

// Cart.propTypes = {
//     /** Number of goods */
//     count: PropTypes.number,
// };
