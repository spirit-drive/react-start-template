import React, {useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from 'src/features/auth/authSlice';
import { RootState } from 'src/app/providers/StoreProvider';
import './css/loginForm.css'
import Loader from "src/shared/components/Loader";

interface LoginFormInputs {
  email: string;
  password: string;
  role: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();

  // Состояние для модалки и лоадера
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Получаем значения из Redux
  const { token, isLoading, error } = useSelector((state: RootState) => state.auth);

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    setIsModalOpen(true); // Открыть модалку при отправке формы
    dispatch(startLogin(data)); // Отправляем данные для логина
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalRetry = () => {
    setIsModalOpen(true); // Модалка остаётся открытой при ошибке
  };

  // Следим за токеном и закрываем модалку, если токен появился
  useEffect(() => {
    if (token) {
      setIsModalOpen(false);
    }
  }, [token]);

  return (
      <div className="login-form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div>
            <label>Email:</label>
            <input
                type="email"
                {...register('email', {
                  required: 'Email обязателен',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Некорректный email',
                  },
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>Пароль:</label>
            <input
                type="password"
                {...register('password', {
                  required: 'Пароль обязателен',
                  minLength: {
                    value: 6,
                    message: 'Пароль должен содержать 6 знаков',
                  },
                })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <label>Роль:</label>
            <select
                {...register('role', {
                  required: 'Выбор роли обязателен',
                })}
            >
              <option value="">Выберите роль</option>
              <option value="user">Пользователь</option>
              <option value="admin">Администратор</option>
            </select>
            {errors.role && <p>{errors.role.message}</p>}
          </div>


          <button onClick={handleCloseModal} type="submit" disabled={isLoading}>Войти</button>
        </form>

        {isModalOpen && (
            <div>
              {isLoading ? (
                  <Loader />
              ) : error ? (
                  <div>
                    <p>{error}</p>
                    {/*<button onClick={handleModalRetry}>Попробовать снова</button>*/}
                  </div>
              ) : (
                  <div>
                    <p>Успешный вход!</p>
                    <button onClick={handleCloseModal}>Закрыть</button>
                  </div>
              )}
            </div>
        )}
      </div>
  );
};

export default LoginForm;