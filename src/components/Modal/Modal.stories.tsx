import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { IModalProps } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<IModalProps> = (args) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? 'Закрыть модальное окно' : 'Открыть модальное окно'}
      </button>

      <Modal showModal={showModal} handleClose={() => setShowModal(false)}>
        <h1>Модальное окно</h1>
        <p>Текст модального окнаа</p>
      </Modal>
    </div>
  );
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {};
