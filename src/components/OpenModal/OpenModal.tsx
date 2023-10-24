import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

import s from './openModal.module.scss';

export const OpenModal = (): React.ReactElement => {
    const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    function handleClick() {
        setIsOpen(true);
        setContent(inputValue);
        setInputValue('');
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value);
    }

    return (
        <>
            <input onChange={handleChange} value={inputValue} type="text" />
            <div className={s.openButton}>
                <button onClick={() => handleClick()}>Открыть модальное окно</button>
            </div>
            <Modal visible={isOpen} children={content} setIsOpen={setIsOpen} />
        </>
    );
};
