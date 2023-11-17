import React, { useState } from 'react';
import { MemoizedModal } from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

import s from './openModal.module.scss';

export const OpenModal = (): React.ReactElement => {
    // const [content, setContent] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    function handleClick() {
        setIsOpen(true);
        // setContent(inputValue);
        setInputValue('');
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value);
    }

    const { t } = useTranslation();

    return (
        <>
            <input onChange={handleChange} value={inputValue} type="text" />
            <div className={s.openButton}>
                <button onClick={() => handleClick()}>{t(`buttons.openModal`)}</button>
            </div>
            <MemoizedModal visible={isOpen} closeModal={closeModal}>
                {inputValue}
            </MemoizedModal>
        </>
    );
};
