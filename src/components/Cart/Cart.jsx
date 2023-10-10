import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CartBlock = styled.div`
    margin: 20px 0;
`;

const CartButton = styled.button`
    cursor: pointer;
    padding: 20px 20px;
    background-color: rgba(255, 133, 139, 1);
    border: 1px solid #000;
    border-radius: 5px;
    color: #fff;
    opacity: 1;
    transition: all ease 0.5s;
    &:hover {
        opacity: 0.8;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const HandleBlock = styled.div`
    width: 100px;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
        width: 30px;
        height: 30px;
        padding: 5px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Cart = ({ count = 0, disabled = false }) => {
    return (
        <CartBlock>
            {count === 0 ? (
                <CartButton disabled={disabled}>Добавить в корзину</CartButton>
            ) : (
                <HandleBlock>
                    <CartButton disabled={disabled}>-</CartButton>
                    <span>{count}</span>
                    <CartButton>+</CartButton>
                </HandleBlock>
            )}
        </CartBlock>
    );
};

Cart.propTypes = {
    /** Number of goods */
    count: PropTypes.number,
};
