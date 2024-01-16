import React, { useEffect } from 'react';
import { useState } from 'react';
import classNames from './modalController.module.css';
import clsx from 'clsx';
import ModalWindow from 'src/components/ModalWindow/ModalWindow';
import { useTranslation } from 'react-i18next';
import i18n from 'src/helper/i18n';
import { useLanguage } from 'src/helper/useLanguage';

const ModalController = () => {
  const [isShow, setIsShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { language } = useLanguage();
  const { t } = useTranslation();

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
      {isShow && <ModalWindow text={inputValue} toggleModal={toggleModal} />}
    </div>
  );
};

export default ModalController;
