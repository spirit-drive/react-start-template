import React from 'react';
import { useState } from 'react';
import classNames from './modalController.module.css';
import clsx from 'clsx';
import ModalWindow from 'src/components/ModalWindow/ModalWindow';

const ModalController = () => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <label htmlFor="inputText">Введите текст для модального окна</label>
      <input
        className={clsx(classNames.inputText)}
        id="inputText"
        onChange={(e) => handleInput(e)}
        value={inputValue}
        type="text"
      />
      <button className={clsx(classNames.showModalBtn)} onClick={toggleModal}>
        Show modal
      </button>
      {isShow && <ModalWindow text={inputValue} toggleModal={toggleModal} />}
    </div>
  );
};

export default ModalController;
