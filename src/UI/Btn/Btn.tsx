import React from 'react';

import './btn.css';

interface BtnProps {
  /** Текст */
  text: string;
  /** Обработчик клика */
  onClick: () => void;
  /** Признак задизейбленной кнопки */
  isDisabled?: boolean;
  /** Тип кнопки */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Компонент "Кнопка"
 */
export const Btn = ({ text, onClick, isDisabled, type }: BtnProps): React.ReactElement => (
  <button className="btn" type={type} onClick={onClick} disabled={isDisabled}>
    {text}
  </button>
);
