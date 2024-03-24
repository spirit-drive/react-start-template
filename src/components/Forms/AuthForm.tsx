import React, { FC, ReactEventHandler } from "react";
import { Field, Form, Formik } from "formik";
import cl from './form.module.scss';

export type data = {
    closePopup: any,
    loginCondition:any
}

export const AuthForm: FC<data> = ({closePopup,loginCondition}) => {
    function validatePassword(value:string) {
        if (!value) {
            return 'Введите пароль';
        }
    }
    function validateEmail(value: string) {
        if (!value) {
            return 'введите email'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return 'некорректный email'
        }
    }
    const loginData = {
        login: 'test@test.test',
        pass:'test1234'
    }

    return (
        <>
         <Formik
                    initialValues={{
                        email: '',
                        password:''
                    }}
                    onSubmit = {values => {
                        console.log('submit', values)
                        if (values.email == loginData.login && values.password == loginData.pass) {
                            loginCondition()
                            closePopup()
                        }
                        }}
                >


                    {({ errors, touched }) => (
                        <Form className={cl.formWrapper}>
                            <label className={cl.label}>
                                 Электронная почта(login)
                                <Field
                                    className={cl.inputField}
                                    name="email"
                                    validate={validateEmail}
                                />
                            </label>
                            <label className={cl.label}>
                                 пароль
                                <Field
                                    className={cl.inputField}
                                    name="password"
                                    type="password"
                                    validate={validatePassword}
                                />
                                {errors.password && touched.password && (
                                    <div className={cl.error}>{errors.password}</div>
                                )}
                            </label>
                            <button className={cl.submit} type="submit" >Войти</button>
                        </Form>
                    )}

            </Formik>
        </>
    )
}