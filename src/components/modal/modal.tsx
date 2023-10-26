import React from 'react';
import cn from 'clsx';
import './modal.css';
import { Button } from '../../stories/Button';

interface ModalProps {
  /** Контент модального окна */
  content: string | React.ReactElement;
  /** Признак открытия модального окна */
  isOpen: boolean;
  /** Обработчик открытия и закрытия модального окна */
  setIsOpen: (isOpenModal: boolean) => void;
}

/**
 * Modal UI component for user interaction
 */
export const Modal = ({ content, isOpen, setIsOpen }: ModalProps) => {
  React.useEffect(() => {
    isOpen ? setIsOpen(true) : setIsOpen(false);
  }, [isOpen, setIsOpen]);

  const handleClickButton = (): void => setIsOpen(false);

  return (
    <>
      <div className={cn('storybook-modal', isOpen && `storybook-modal-visible`)}>
        <div className="storybook-modal-body">
          <div className="storybook-modal-header">
            <h2>Модальное окно</h2>
          </div>
          <div className="storybook-modal-content">
            <p>{content}</p>
          </div>
          <div className="storybook-modal-footer">
            <Button label="Закрыть" primary onClick={handleClickButton} />
          </div>
        </div>
      </div>
      <div className="storybook-overlay" />
    </>
  );
};
