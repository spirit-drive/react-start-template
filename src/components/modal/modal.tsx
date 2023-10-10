import React from 'react';
import cn from 'clsx';
import './modal.css';
import { Button } from '../../stories/Button';

interface ModalProps {
  /**
   * Признак открытия модального окна
   */
  visible: boolean;
  /**
   * Контент модального окна
   */
  children: React.ReactElement;
}

/**
 * Modal UI component for user interaction
 */
export const Modal = ({ visible = false, children }: ModalProps) => (
  <>
    <div className={cn('storybook-modal', visible && `storybook-modal-visible`)}>
      <div className="storybook-modal-body">
        <div className="storybook-modal-header">
          <h2>Модальное окно</h2>
        </div>
        <div className="storybook-modal-content">
          <p>{children}</p>
        </div>
        <div className="storybook-modal-footer">
          <Button label="Закрыть" primary />
        </div>
      </div>
    </div>
    <div className="storybook-overlay" />
  </>
);
