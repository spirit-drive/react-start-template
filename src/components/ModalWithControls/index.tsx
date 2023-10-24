import React, { ChangeEvent, useState } from 'react';
import { Button, ButtonVariant } from '../Button';
import Modal from '../Modal';

import s from './index.module.scss';
import { useTranslation } from 'react-i18next';

const ModalWithControls = () => {
  const { t } = useTranslation();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const onModalTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setModalText(event.target.value);
  };

  return (
    <div className={s['modal-with-controls']}>
      <Button variant={ButtonVariant.primary} onClick={toggleModalVisible}>
        {t('global.openModal')}
      </Button>
      <input placeholder={t(`global.modalInput.placeholder`)} value={modalText} onChange={onModalTextChange} />
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        {modalText}
      </Modal>
    </div>
  );
};

export default ModalWithControls;
