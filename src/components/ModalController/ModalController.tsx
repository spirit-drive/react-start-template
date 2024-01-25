import React, { useEffect, useState } from 'react';
import classNames from './modalController.module.css';
import clsx from 'clsx';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import i18n from '../../helper/i18n';
import { useLanguage } from '../../helper/useLanguage';
import {createPortal} from "react-dom";

const bodyElement = document.querySelector('body');
const ModalController = () => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { language } = useLanguage();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={clsx(classNames.modalController)}>
      <label htmlFor="inputText">{i18n.t('test')}</label>
      <input
        className={clsx(classNames.inputText)}
        id="inputText"
        onChange={(e) => handleInput(e)}
        value={inputValue}
        type="text"
      />
      <button className={clsx(classNames.showModalBtn)} onClick={toggleModal}>
        {i18n.t('buttons.modalBtn')}
      </button>
      {isShow && createPortal(<ModalWindow text={inputValue} toggleModal={toggleModal} />, bodyElement)}
    </div>
  );
};

export default ModalController;
