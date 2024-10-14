import React from 'react';
import { Btn } from '../Btn/Btn';

import './modal.css';

interface ModalComponentProps {
  /** Признак видимости компонента */
  showModal: boolean;
  /** Обработчик закрытия */
  closeHandler: () => void;
  /** Заголовок */
  title: string;
  /** Тело */
  children: React.ReactNode;
  /** Целевая кнопка */
  titleButton?: string;
  /** Обработчик целевой кнопки */
  onClickButton?: () => void;
}

/**
 * Компонент "Модальное окно"
 */
export const Modal = ({
  showModal,
  closeHandler,
  title,
  children,
  titleButton,
  onClickButton,
}: ModalComponentProps): React.ReactElement => {
  React.useEffect(() => {
    if (showModal) {
      document.querySelector('body').style.overflowY = 'hidden';
    } else document.querySelector('body').style.overflowY = 'auto';
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-window">
        <button className="modal-close" onClick={closeHandler} />
        <h1 className="modal-header">{title}</h1>
        <div className="modal-body">{children}</div>
        {!!titleButton && (
          <div className="modal-footer">
            <Btn text={titleButton} onClick={onClickButton} />
          </div>
        )}
      </div>
    </div>
  );
};
