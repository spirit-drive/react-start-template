import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import s from "./RegisterSagaPage.module.sass";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { Layout } from "../../shared/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { profileRegister } from "../../store/slices/saga/authAndProfileSaga";
import { zodResolver } from "@hookform/resolvers/zod";
import { emailPasswordSchema } from "../../entities/Register/model/types";

export const RegisterSagaPage = () => {
    const navigate = useNavigate();
    const isLoading = useAppSelector(state => state.authAndProfile.loading.isLoading);
    const error = useAppSelector(state => state.authAndProfile.error);
    const profile = useAppSelector(state => state.authAndProfile.profile);
    const dispatcher = useDispatch();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(emailPasswordSchema),
    });

    useEffect(() => {
        if (profile.email && profile.email.length > 0) {
            navigate('/profile');
        }
    }, [profile])

    const onConfirm = (email: string, password: string) => {
        dispatcher(profileRegister({ isNewUser: true, email, password }));
    }

    return (
        <Layout>
            <form className={s.formContainerColumn} onSubmit={handleSubmit((data) => { onConfirm(data.email, data.password) })}>
                <div>{'Регистрация нового пользователя'}</div>
                {isLoading &&
                    <div>{'Идет регистрация'}</div>
                }
                {error.isError &&
                    <div className={s.errorMessage}>
                        {error.errorMessage}
                    </div>
                }

                {profile.email &&
                    <div className={s.successMessage}>
                        {`Регистрация пользователя ${profile.name} прошла успешно.`}
                    </div>
                }

                <div>{'Почта:'}</div>
                <input {...register('email')} ></input>
                {errors.email && <p className={s.red}>{errors.email.message}</p>}

                <div>{'Пароль:'}</div>
                <input {...register('password')} type="password" ></input>
                {errors.password && <p className={s.red}>{errors.password.message}</p>}

                <div className={s.button}>
                    <button type="submit">Зарегистрироваться</button>
                </div>

                <NavLink to="/login">
                    {'Я уже зарегистрирован'}
                </NavLink >
            </form >
        </Layout>
    )
}