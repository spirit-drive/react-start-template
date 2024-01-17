import React, { FC } from 'react';
import clsx from 'clsx';
import classNames from './modalWindow.module.css';
import { ModalWindowProps } from '../../types';
import { useTheme } from '../../helper/useTheme';
const ModalWindow: FC<ModalWindowProps> = ({ text, toggleModal }) => {
  const { theme } = useTheme();
  const themeClass = `box-${theme}`;

  return (
    <div className={clsx(classNames.wrapper)}>
      <div className={clsx(classNames[themeClass], classNames.boxGeneral)}>
        <span onClick={toggleModal} className={clsx(classNames.closeModal)}>
          &#10006;
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalWindow;
