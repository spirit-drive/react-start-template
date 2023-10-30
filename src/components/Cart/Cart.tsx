import React from 'react';
import { useTranslation } from 'react-i18next';

import s from './cart.module.scss';

type Props = {
    /** Number of goods */
    count: number;
    /** Disabled prop */
    disabled: boolean;
};

export const Cart = ({ count = 0, disabled = false }: Props): React.ReactElement => {
    const { t } = useTranslation();
    return (
        <div className={s.cart}>
            {count === 0 ? (
                <button className={s.button} disabled={disabled}>
                    {t(`buttons.add`)}
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
