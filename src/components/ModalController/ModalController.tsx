import clsx from 'clsx';
import React, { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import CreateProductForm from '../../components/CreateProductForm/CreateProductForm';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { useLanguage } from '../../helper/useLanguage';
import { useModalCreateProduct } from '../../helper/useModalCreateProduct';
import classNames from './modalController.module.css';

const ModalController: FC = () => {
  const { isShow, toggleModal } = useModalCreateProduct();
  const navigate = useNavigate();
  useLanguage();

  useEffect(() => {
    if(!isShow) {
      toggleModal();
    }
  }, []);

  const navigateModal = () => {
    !isShow ? navigate('/modal') : navigate('/');
  };

  const modalContent = (
    <ModalWindow navigateModal={navigateModal}>
      <CreateProductForm navigateModal={navigateModal} />
    </ModalWindow>
  );
  console.log(isShow);
  return <div className={clsx(classNames.modalController)}>{isShow && createPortal(modalContent, document.body)}</div>;
};

export default ModalController;
