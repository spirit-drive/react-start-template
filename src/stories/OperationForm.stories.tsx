import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import '../UI/Form/form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@corex/hook-form-yup-resolver';
import * as yup from 'yup';
import { Btn } from '../UI';

type Story = StoryObj<typeof meta>;

interface Props {
  isAddMode: boolean;
}

type Inputs = {
  operationName: string;
  operationPrice: number;
};

const schema = yup.object().shape({
  operationName: yup.string().required('Введите название операции'),
  operationPrice: yup.string().required('Введите цену операции'),
});

const OperationFormComponent = ({ isAddMode }: Props): React.ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      operationName: null,
      operationPrice: null,
    },
    resolver: yupResolver(schema as any),
  });

  const customHandleSubmit = (values: Inputs) => {
    console.log('Текущая операция: ', values);
    reset();
  };

  return (
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
  );
};

/**
 * Компонент "Добавление/редактирование карточки операции"
 *
 * Без обращения к серверу
 *
 * Только записи в консоль и отчистка формы
 */

const meta: Meta = {
  title: 'Forms/Operation',
  component: OperationFormComponent,
  args: {
    isAddMode: false,
  },
  tags: ['autodocs'],
};

export default meta;

export const Tooltip: Story = {};
