import React from 'react';
import styled from '@emotion/styled';

const DeleteButton = styled.div`
    & button {
        cursor: pointer;
        padding: 14px 24px;
        background-color: rgba(255, 133, 139, 1);
        border: 1px solid #000;
        border-radius: 5px;
        color: #fff;
        opacity: 1;
        transition: all ease 0.5s;
        &:hover {
            opacity: 0.8;
        }
    }
`;

export const Delete = () => {
    return (
        <DeleteButton>
            <button>Удалить</button>
        </DeleteButton>
    );
};
