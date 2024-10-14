import React from 'react';

import { Modal } from '../Modal/Modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@corex/hook-form-yup-resolver';
import { Btn } from '../Btn/Btn';

interface Props {
  title?: string;
  price?: number;
  isAddMode?: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type Inputs = {
  operationName: string;
  operationPrice: number;
};

const schema = yup.object().shape({
  operationName: yup.string().required('Введите название операции'),
  operationPrice: yup.string().required('Введите цену операции'),
});

/**
 * Компонент "Карточка добавления/редактирования операции"
 */
export const OperationModal = ({ title, price, isOpen, setIsOpen, isAddMode = false }: Props): React.ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      operationName: title || null,
      operationPrice: price || null,
    },
    resolver: yupResolver(schema as any),
  });

  const customHandleSubmit = (values: Inputs) => {
    console.log('Текущая операция: ', values);
    reset();
  };

  return (
    <Modal
      showModal={isOpen}
      title={isAddMode ? 'Добавление операции' : `Операция '${title}'`}
      closeHandler={() => {
        setIsOpen(false);
        reset();
      }}
    >
      <form onSubmit={handleSubmit(customHandleSubmit)} className="form">
        <div className="flex-column margin-bottom-8">
          <label className="margin-bottom-4" htmlFor="operationName">
            Название
          </label>
          <input placeholder="Название операции" id="operationName" {...register('operationName')} type="text" />
          {errors.operationName && <p className="error-message">{errors.operationName.message}</p>}
        </div>
        <div className="flex-column margin-bottom-16">
          <label className="margin-bottom-4" htmlFor="operationPrice">
            Цена
          </label>
          <input placeholder="Цена операции" id="operationPrice" {...register('operationPrice')} type="number" />
          {errors.operationPrice && <p className="error-message">{errors.operationPrice.message}</p>}
        </div>
        <Btn text={isAddMode ? 'Добавить' : 'Редактировать'} onClick={() => null} type="submit" />
      </form>
    </Modal>
  );
};
