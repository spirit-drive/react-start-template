import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@corex/hook-form-yup-resolver';
import * as yup from 'yup';
import { Btn, Layout } from 'src/UI';

// Типы полей формы
type Inputs = {
  name: string;
  age: number;
  document: string;
  infoMethod: string;
};

// Валидация формы по полям
const schema = yup
  .object()
  .shape({
    name: yup.string().required('Введите имя'),
    age: yup.number().required('Укажите возраст'),
    document: yup.string().required(),
    infoMethod: yup.string().required(),
  })
  .required();

export const Profile = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      name: null,
      age: null,
      document: 'Паспорт',
      infoMethod: 'phone',
    },
    resolver: yupResolver(schema as any),
  });

  /** Отслеживаем и выводим в консоль значение поля "имя" */
  const nameField = watch('name');
  React.useEffect(() => {
    console.log('Значение поля имя: ', nameField);
  }, [nameField]);

  /** Основной хендлер для формы */
  const customHandleSubmit = (values: Inputs) => {
    console.log('values: ', values);
    reset();
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(customHandleSubmit)} className="form">
        <div className="margin-bottom-16 flex-row align-items-start">
          <label htmlFor="name">Имя</label>
          <div className="flex-column">
            <input
              placeholder="Имя"
              id="name"
              type="text"
              className={`${errors.name && 'invalid'}`}
              {...register('name')}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
        </div>

        <div className="margin-bottom-16 flex-row align-items-start">
          <label htmlFor="age">Возраст</label>
          <div className="flex-column">
            <input
              placeholder="Возраст"
              id="age"
              type="number"
              className={`${errors.age && 'invalid'}`}
              {...register('age')}
            />
            {errors.age && <p className="error-message">{errors.age.message}</p>}
          </div>
        </div>

        <div className="margin-bottom-16 flex-row align-items-start">
          <label htmlFor="age">Документ, удостоверяющий личность</label>
          <div className="flex-column">
            <select {...register('document')} placeholder="Выберите документ">
              <option>Паспорт</option>
              <option>Удостоверение</option>
            </select>
          </div>
        </div>

        <div className="margin-bottom-16 flex-row">
          <label htmlFor="age">Предпочтительный способ связи</label>
          <div className="flex-column">
            <div className="flex-row align-items-center">
              <input
                type="radio"
                id="infoMethodPhone"
                {...register('infoMethod')}
                value="phone"
                className={`${errors.infoMethod && 'invalid'}`}
              />
              <label htmlFor="infoMethodPhone">телефон</label>

              <input type="radio" id="infoMethodPhoneMail" {...register('infoMethod')} value="email" />
              <label htmlFor="infoMethodPhoneMail">почта</label>
            </div>
          </div>
        </div>

        <Btn text="Сохранить" onClick={() => null} type="submit" />
      </form>
    </Layout>
  );
};
