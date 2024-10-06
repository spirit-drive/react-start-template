import React from "react";
import { useForm } from "react-hook-form";
import s from "./RegisterSagaPage.module.sass";
import { useDispatch } from "react-redux";
import { profileRegister } from "../../store/slices/authAndProfile";
import { useAppSelector } from "../../store/hooks";
import { Layout } from "../../shared/Layout";

export const RegisterSagaPage = () => {
    const isLoading = useAppSelector(state => state.authAndProfile.loading.isLoading);
    const error = useAppSelector(state => state.authAndProfile.error);
    const profile = useAppSelector(state => state.authAndProfile.profile);
    const dispatcher = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onConfirm = (email: string, password: string) => {
        dispatcher(profileRegister({ email, password }));
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit((data) => { onConfirm(data.email, data.password) })}>
                <div>{'Регистрация нового пользователя (отправка запроса в SAGA эффектах)'}</div>
                {isLoading &&
                    <div>{'Идет регистрация'}</div>
                }
                {error.isError &&
                    <div className={s.errorMessage}>
                        {error.errorMessage}
                    </div>
                }

                {profile.userName &&
                    <div className={s.successMessage}>
                        {`Регистрация пользователя ${profile.userName} прошла успешно.`}
                    </div>
                }

                <div>{'Почта:'}</div>
                <input {...register('email')} ></input>
                <div>{'Пароль:'}</div>
                <input {...register('password')} type="password" ></input>

                <div>
                    <button type="submit">Зарегистрироваться</button>
                </div>
            </form >
        </Layout>
    )
}