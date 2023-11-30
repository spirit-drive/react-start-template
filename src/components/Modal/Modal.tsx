import React, { FC, ReactElement } from "react";
import cn from "classnames";
import "./Modal.scss";

interface ModalProps {

    /**
     * Отображать/Скрыть модальное окно
     */
    visible: boolean;

    /**
     * Функция, скрывающая модальное окно
     */
    setVisible: (visible: boolean) => void; 

    /**
     * Внутреннее содержимое модального окна
     */
    children?: React.ReactNode;
};

/**
 * Компонент модального окна. Состоит из темной маски, белого квадратного окна и кнопки закрытия. Обработчики писать пока не нужно. Обладает пропсом 
 * visible и children, для них должны быть реализовано управление в сторибук. Логики монтирования в body пока не нужно реализовывать.
 */
export const Modal: FC<ModalProps> = ({visible = false, setVisible, children}): ReactElement => {
    return (
        <div className={cn("modal", {open: visible})} id="my-modal">
            <div className="modal__box" >
                <button className="modal__close-btn" id="close-my-modal-btn" onClick={() => setVisible(false)}>
                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z" fill="#333333"/>
                        <path d="M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z" fill="#333333"/>
                    </svg>
                </button>
                    {children}
            </div>
        </div>
    );
};