import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const Mask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 15px 0;
    overflow: auto;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    background-color: rgba(255, 133, 139, 0.6);

    ${(props) => getVisibility(props)}
`;

const ModalContent = styled.div`
    width: 400px;
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: -28px;
    top: -28px;
    width: 24px;
    height: 24px;
    opacity: 0.2;
    cursor: pointer;
    transition: opacity ease 0.5s;

    &:hover {
        opacity: 1;
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 24px;
        height: 3px;
        background-color: #fff;
        top: 10px;
        left: 0px;
    }

    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
`;

const getVisibility = ({ visible = true }) => {
    return visible
        ? css`
              display: flex;
          `
        : css`
              display: none;
          `;
};

/** Modal component */
export const Modal = ({ children, ...rest }) => {
    return (
        <Mask {...rest} className="mask">
            <ModalContent className="modal">
                {children}
                <CloseButton className="modal-close" />
            </ModalContent>
        </Mask>
    );
};

Modal.propTypes = {
    /** Modal visibility */
    visible: PropTypes.bool,
    /** Modal content */
    children: PropTypes.node,
};
