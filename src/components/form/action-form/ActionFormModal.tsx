import React from 'react';
import './../form.css';
import { LayoutBox } from '../../layout';
import { Button } from './../../button';
import { Modal } from '../../modal';

/**
 * Компонент формы вызова модального окна
 */
export const ActionFormModal = () => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [valueInput, setValueInput] = React.useState<string>('Вы ничего не написали');

  return (
    <>
      <LayoutBox>
        <form action="modal">
          <div className="form-group">
            <label className="d-block" htmlFor="i_modal">
              Введите текст
            </label>
            <input
              className="form-control"
              placeholder="Этот текст будет виден в модальном окне"
              type="text"
              name="i_modal"
              id="i_modal"
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>

          <Button label="Открыть окно" size="medium" primary onClick={() => setIsOpenModal(true)} />
        </form>
      </LayoutBox>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} content={valueInput} />
    </>
  );
};
