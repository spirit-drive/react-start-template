import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CreateProductForm from '../../components/CreateProductForm/CreateProductForm';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useLanguage } from '../../helper/useLanguage';
import classNames from './modalController.module.css';

type ModalControllerProps = {
  buttonText?: string;
};

const ModalController: FC<ModalControllerProps> = ({ buttonText }) => {
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  useLanguage();

  const toggleModal = () => {
    !isShow ? navigate('/modal') : null;
    setIsShow(!isShow);
  };

  const modalContent = (
    <ModalWindow toggleModal={toggleModal}>
      <CreateProductForm toggleModal={toggleModal} />
    </ModalWindow>
  );

  return (
    <div className={clsx(classNames.modalController)}>
      {buttonText && <DefaultButton callback={toggleModal}>{buttonText}</DefaultButton>}
      {isShow && createPortal(modalContent, document.body)}
    </div>
  );
};

export default ModalController;
