import React, { useEffect, useMemo, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FormikConfig, useFormik } from 'formik'
import AuthForm from './AuthForm'
import { AuthFormErrors, AuthFormValues } from './types'
import { isLongEnough, isNotDefinedString, isNotValidEmail, MIN_LENGTH_PASSWORD } from '../../../utils/validation'
import { Button } from 'antd'


const meta: Meta<typeof AuthForm> = {
    title: 'Components/AuthForm',
    component: AuthForm,
    argTypes: { }
}

export default meta;

export const Main: StoryObj<typeof AuthForm> = {
    render: () => {
        const [auth, setAuth] = useState({ email: '', password: '' })

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
                        // value - содержит поля формы
                        console.debug('save auth', values)

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

        useEffect(() => {
            // console.log('formManager')
        }, [auth, setValues])

        return (
            <>
                <AuthForm formManager={formManager} />
                <Button type="primary" onClick={submitForm}>
                    Вход/регистрация
                </Button>
            </>
        )
    },
    args: {}
};
