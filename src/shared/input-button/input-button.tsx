import React, { FC, useState } from 'react';
import cn from 'clsx';
import './input-button.css';
import ModalWindow from '../modal-window/modal-window';

export interface InputButtonProps {
    text: string;
};


/**
 * Компонент инпута и кнопки, по кнопке открывается модальное окно с текстом из инпута
 */
const InputButton: FC<InputButtonProps> = ({ text }) => {
    const [opened, setOpened] = useState(false);

    const handleClose = () => {

    }

    const handleOpenButton = () => {
        setOpened(prev => !prev);
    }

    return (
        <div className={cn('input-button')}>
            <div className={cn('input-button-container')}>
                <input
                    value={text}
                    onChange={() => {}}
                    />
                <button
                    onClick={() => handleOpenButton() }
                    >Открыть</button>
            </div>
            <ModalWindow >{text}</ModalWindow>
        </div>
    );
};

export default InputButton;