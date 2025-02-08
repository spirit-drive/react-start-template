import React, { useEffect }  from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { startRegistration } from 'src/features/auth/authSlice'; // Путь к вашему экшену для регистрации
import './css/registerPage.css';
import {RootState} from "src/app/providers/StoreProvider";
import Loader from "src/shared/components/Loader";
import { useNavigate } from 'react-router-dom';


interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegisterPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterFormInputs>();
    // const password = watch('password');
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.auth);

    const navigate = useNavigate();
    const isRegistered = useSelector((state: RootState) => state.auth.isRegistered);

    // Навигация после успешной регистрации
    useEffect(() => {
        if (isRegistered) {
            navigate('/profile');
        }
    }, [isRegistered, navigate]);

    const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
        dispatch(startRegistration(data));
    };

    return (
        <div className='registerPage'>
            {isLoading ? (
                <Loader /> // Показываем лоадер, если идет загрузка
            ) : (
            <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>
                {/*<div>*/}
                {/*    <label>Имя:</label>*/}
                {/*    <input {...register('username', { required: 'Имя обязательно' })} />*/}
                {/*    {errors.username && <p className='errorMessage'>{errors.username.message}</p>}*/}
                {/*</div>*/}

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
                    {errors.email && <p className='errorMessage'>{errors.email.message}</p>}
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
                    {errors.password && <p className='errorMessage'>{errors.password.message}</p>}
                </div>

                {/*<div>*/}
                {/*    <label>Повторите пароль:</label>*/}
                {/*    <input*/}
                {/*        type="password"*/}
                {/*        {...register('confirmPassword', {*/}
                {/*            required: 'Повторите пароль',*/}
                {/*            validate: (value) => value === password || 'Пароли не совпадают',*/}
                {/*        })}*/}
                {/*    />*/}
                {/*    {errors.confirmPassword && (*/}
                {/*        <p className='errorMessage'>{errors.confirmPassword.message}</p>*/}
                {/*    )}*/}
                {/*</div>*/}

                <button type="submit">Зарегистрироваться</button>
            </form>
            )}
        </div>
    );
};

export default RegisterPage;