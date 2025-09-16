import React, { FC } from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from 'src/context/auth-provider/AuthProvider'
import RegisterForm from 'src/features/forms/RegisterForm/RegisterForm'
import { RegisterData } from 'src/models/register'

const RegisterPage: FC = () => {
    const { register, errors } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (data: RegisterData) => {
        register({
            email: data.email,
            password: data.password
        }, handleSuccess)
    }

    const handleSuccess = () => {
        // пользователь успешно зарегистрирован
        // переходим на страницу аутентификации
        navigate('/auth')
    }

    return (
        <RegisterForm onSubmit={handleSubmit} registerError={errors} />
    )
}

export default RegisterPage