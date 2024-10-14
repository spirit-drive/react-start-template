import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@corex/hook-form-yup-resolver';
import * as yup from 'yup';
import { Btn, Layout } from '../../UI';
import { useNavigate } from 'react-router-dom';

// Типы полей формы
type Inputs = {
  email: string;
  password: string;
};

// Валидация формы по полям
const schema = yup.object().shape({
  email: yup.string().required('Введите email').email('Введите корректный email'),
  password: yup.string().required('Введите пароль').min(6, 'Пароль должен содержать не менее шести символов'),
});

export const Sign = (): React.ReactElement => {
  const navigate = useNavigate();
  const [clicked, setClicked] = React.useState<'enter' | 'reg' | null>(null);
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    defaultValues: {
      email: null,
      password: null,
    },
    resolver: yupResolver(schema as any),
  });

  const afterActionTimeout = () =>
    setTimeout(() => {
      navigate('main');
      reset();
      setIsSuccess(null);
    }, 5000);

  /** Хендлер входа */
  const customHandleSubmit = (values: Inputs) => {
    if (values.email === 'test@test.ru') {
      console.log('Вход для: ', values);
      setIsSuccess(true);
      afterActionTimeout();
    } else {
      setIsSuccess(false);
    }
  };

  /** Хендлер регистрации */
  const customRegHandleSubmit = (values: Inputs) => {
    console.log('Зарегистрирован: ', values);
    setIsSuccess(true);
    afterActionTimeout();
  };

  return (
    <Layout>
      <form
        onSubmit={
          (clicked === 'enter' && handleSubmit(customHandleSubmit)) ||
          (clicked === 'reg' && handleSubmit(customRegHandleSubmit)) ||
          null
        }
        className="form"
      >
        <div className="margin-bottom-16 subtitle">Подсказка: зареганый юзер будет с эмейлом test@test.ru</div>
        <div className="margin-bottom-16 flex-row align-items-start">
          <label htmlFor="name">Email</label>
          <div className="flex-column">
            <input placeholder="Введите email" id="email" {...register('email')} type="text" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
        </div>

        <div className="margin-bottom-16 flex-row align-items-start">
          <label htmlFor="age">Пароль</label>
          <div className="flex-column">
            <input
              placeholder="Введите пароль"
              id="password"
              type="password"
              className={`${errors.password && 'invalid'}`}
              {...register('password')}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
        </div>
        {isSuccess && (
          <div className="margin-bottom-16 txt-success">
            {(clicked === 'reg' && 'Регистрация') || (clicked === 'enter' && 'Авторизация')} завершена успешно! Через 5
            секунд Вы будете перенаправленны на <a href="/main">главную</a> страницу приложения
          </div>
        )}

        {isSuccess !== null && !isSuccess && (
          <div className="margin-bottom-16 txt-danger">Учетная запись не найдена!</div>
        )}

        <div className="flex-row gap-16">
          <Btn text="Войти" onClick={() => setClicked('enter')} type="submit" />
          <Btn text="Зарегистрироваться" onClick={() => setClicked('reg')} type="submit" />
        </div>
      </form>
    </Layout>
  );
};
