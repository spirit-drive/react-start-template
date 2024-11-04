import React, { useEffect } from "react"
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import s from './LoginPage.module.sass';
import { NavLink, useNavigate } from 'react-router-dom';
import { Layout } from "../../shared/Layout";
import { profileRegister } from "../../store/slices/saga/authAndProfileSaga";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailPasswordSchema, TLoginInfo } from "../../entities/Register/model/types/types";

export const LoginPage = () => {
    const token = useAppSelector(state => state.authAndProfile.auth.token);
    const error = useAppSelector(state => state.authAndProfile.error);
    const dispatcher = useAppDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginInfo>({
        defaultValues: { email: "", password: ""},
        resolver: zodResolver(emailPasswordSchema),
    });

    const onConfirm = (email: string, password: string) => {
        dispatcher(profileRegister({ isNewUser: false, email, password }));
    }

    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token])

    return (
        <Layout>
            <form className={s.formContainerColumn} onSubmit={handleSubmit((data) => {
                onConfirm(data.email, data.password)
            })}>
                <div className={s.blue}>
                    Вы не авторизованы
                </div>

                <div>
                    Введите почту и пароль
                </div>

                {token &&
                    <div className={s.success}>
                        {'Успешный вход'}
                    </div>}
                {error.isError &&
                    <div className={s.error}>
                        {error.errorMessage}
                    </div>
                }

                <div className={s.containerColumn}>
                    <label>Почта:</label>
                    <input {...register('email')} />
                </div>
                {errors.email && <p className={s.red}>{errors.email.message}</p>}

                <div className={s.containerColumn}>
                    <label>Пароль:</label>
                    <input {...register('password')} type="password" />
                </div>
                {errors.password && <p className={s.red}>{errors.password.message}</p>}

                <button className={s.button} type="submit">Войти</button>

                <NavLink to="/register_saga">
                    {'Я новый пользователь'}
                </NavLink >
            </form>

        </Layout>
    )
}