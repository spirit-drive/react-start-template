import React, { useState } from "react"
import s from './OpenModal.module.sass'
import { Modal } from "../../shared/Modal"

export const OpenModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [inputText, setInputText] = useState("Проверочный текст");

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    return (
        <div className={s.container}>

            <input type="text" value={inputText} onChange={handleOnChange} />
            <button onClick={() => setIsOpenModal(prev => !prev)}>
                Открыть
            </button>
            {/* Модальное окно */}
            <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
                {inputText}
            </Modal>


        </div>
    )
}