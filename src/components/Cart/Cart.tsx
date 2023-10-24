import React from 'react';

import s from './cart.module.scss';

type Props = {
    /** Number of goods */
    count: number;
    /** Disabled prop */
    disabled: boolean;
};

export const Cart = ({ count = 0, disabled = false }: Props): React.ReactElement => {
    return (
        <div className={s.cart}>
            {count === 0 ? (
                <button className={s.button} disabled={disabled}>
                    Добавить в корзину
                </button>
            ) : (
                <div className={s.handleBlock}>
                    <button className={s.button}>-</button>
                    <span>{count}</span>
                    <button className={s.button}>+</button>
                </div>
            )}
        </div>
    );
};

// Cart.propTypes = {
//     /** Number of goods */
//     count: PropTypes.number,
// };
