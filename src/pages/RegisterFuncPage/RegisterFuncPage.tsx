import React, { useState } from "react";
import { useForm } from "react-hook-form";
import s from "./RegisterFuncPage.module.sass";
import { isTErrorResponse, TServerError } from "../../shared/fetchHelpers/typeGuards";
import { isTRegisterProfile } from "../../shared/fetchHelpers/registerTypeGuards";
import { postRegisterApi } from "../../entities/Register/api/request";
import { Layout } from "../../shared/Layout";

export const RegisterFuncPage = () => {
    const unknownError = 'Не известная ошибка';

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onConfirm = (email: string, password: string) => {
        setErrorMessage("");
        setSuccessMessage("");

        postRegisterApi(email, password)
            .then(result => {
                if (isTRegisterProfile(result)) {
                    setSuccessMessage(`Пользователь ${result.profile.email} успешно зарегистрирован`)
                } else {
                    setErrorMessage(unknownError);
                }
            })
            .catch((error: unknown) => {
                if (isTErrorResponse(error)) {
                    let allErrors = "";
                    error.response.data.errors.forEach((e: TServerError) => allErrors += e.message)
                    setErrorMessage(allErrors);
                } else {
                    setErrorMessage(unknownError);
                }
            })
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit((data) => { onConfirm(data.email, data.password) })}>
                <div>{'Регистрация нового пользователя (отправка запросов из функционального компонента)'}</div>
                {errorMessage &&
                    <div className={s.errorMessage}>
                        {errorMessage}
                    </div>
                }

                {successMessage &&
                    <div className={s.successMessage}>
                        {successMessage}
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