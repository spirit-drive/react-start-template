import React, { FC, ReactElement, useState, ChangeEvent } from 'react';
import { ModalWindow } from '../../ModalWindow';

export const ButtonWithInputModal: FC = (): ReactElement => {
  const [input, setInput] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const openModal = (visible: boolean): void => {
    setVisible(visible);
  };

  return (
    <>
      <input className="w-50" onChange={(e) => handlerChangeInput(e)} value={input} placeholder="Введите текст"></input>
      <br />
      <br />
      <button onClick={() => openModal(true)}>Нажми меня и вылетит птичка</button>
      <ModalWindow visible={visible} onCloseModalWindow={openModal}>
        {input}
      </ModalWindow>
    </>
  );
};
