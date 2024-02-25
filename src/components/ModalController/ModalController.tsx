import React, { FC, useState } from 'react';
import classNames from './modalController.module.css';
import clsx from 'clsx';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useLanguage } from '../../helper/useLanguage';
import { createPortal } from 'react-dom';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CreateProductForm from '../../components/CreateProductForm/CreateProductForm';

type ModalControllerProps = {
  buttonText?: string
}

const bodyElement = document.querySelector('body');
const ModalController: FC<ModalControllerProps> = ({buttonText}) => {
  const [isShow, setIsShow] = useState(false);
  useLanguage();

  const toggleModal = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={clsx(classNames.modalController)}>
      { buttonText ? <DefaultButton callback={toggleModal}>{buttonText}</DefaultButton> : null }
      { isShow && createPortal(<ModalWindow  toggleModal={toggleModal} >

        <CreateProductForm toggleModal={toggleModal}/>

      </ModalWindow>, bodyElement) }
    </div>
  );
};

export default ModalController;
