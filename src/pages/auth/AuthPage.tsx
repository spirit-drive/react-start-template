import React, { FC, useMemo, useState } from "react"
import { Alert, Button } from "antd"
import { useNavigate } from "react-router";
import { FormikConfig, useFormik } from "formik"

import { useAuth } from "src/context/auth-provider/AuthProvider";
import AuthForm from "src/features/forms/AuthForm/AuthForm"
import { AuthFormErrors, AuthFormValues } from "src/features/forms/AuthForm/types"
import { isLongEnough, isNotDefinedString, isNotValidEmail, MIN_LENGTH_PASSWORD } from "src/utils/validation"
import './AuthPage.css'
import { AuthData } from "src/models/auth";

const AuthPage: FC = () => {
    const { currentUser, login, errors } = useAuth()
    const [auth, setAuth] = useState<AuthData>({ email: currentUser, password: '' })
    const navigate = useNavigate()

    const { onSubmit, validate, initialValues } = useMemo<
        Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
    >(() => {
        return {
            initialValues: {
                email: auth?.email,
                password: auth?.password,
            },
            onSubmit: (values, { setErrors }) => {
                try {
                    // Сохранение данных формы
                    if (login(values)) {
                        navigate('/')
                    }

                } catch (error) {
                    // Ошибка сохранения данных формы
                    console.log('save error', error)
                }
            },
            validate: (values) => {
                // Валидация формы
                // value - содержит поля формы
                const errors = {} as AuthFormErrors;

                if (isNotDefinedString(values.email)) {
                    errors.email = 'Обязательное поле!'
                } else if (isNotValidEmail(values.email)) {
                    errors.email = 'Неправельный адрес эл. почты!'
                }

                if (!isLongEnough(values.password)) {
                    errors.password = `Длина пароля должна быть не менее ${MIN_LENGTH_PASSWORD} символов!`
                }

                return errors;
            },
        };
    }, [auth]);

    const formManager = useFormik<AuthFormValues>({
        initialValues,
        onSubmit,
        validate,
    });
    const { submitForm, setValues } = formManager;

    return (
        <div className="auth">
            <AuthForm formManager={formManager} />
            {(errors.length > 0) &&
                <Alert message={errors} type="error" style={{marginBottom: 20}} />
            }
            <div>
                <Button type="primary" onClick={submitForm}>
                    Вход
                </Button>
            </div>
        </div>
    )
}

export default AuthPage