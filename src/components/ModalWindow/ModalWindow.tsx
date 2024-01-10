import React, { FC } from 'react';
import clsx from 'clsx';
import classNames from './modalWindow.module.css';
import { ModalWindowProps } from 'src/types';
const ModalWindow: FC<ModalWindowProps> = ({ text, toggleModal }) => {
  return (
    <div className={clsx(classNames.wrapper)}>
      <div className={clsx(classNames.box)}>
        <span onClick={toggleModal} className={clsx(classNames.closeModal)}>
          &#10006;
        </span>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ModalWindow;
