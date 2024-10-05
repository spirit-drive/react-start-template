import React, { useState } from "react"
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/hooks";
import { saveProfile, saveToken } from "../../store/slices/authAndProfile";
import s from './LoginPage.module.sass';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate  } from 'react-router-dom';

type TUser = {
    name: string;
    pass: string;
    address: string;
    phone: string;
    role: string;
}

const users: TUser[] = [
    { name: "user", pass: "123", address: "Краснодар, ул. Красная", phone: "", role: "USER" },
    { name: "admin", pass: "456", address: "Москва, Красная площадь", phone: "", role: "ADMIN" },
]

export const LoginPage = () => {
    const [error, setError] = useState("")
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate ();

    return (
        <form className={s.formContainerColumn} onSubmit={handleSubmit((data) => {
            const found = users.find(u => u.name.toUpperCase() == data.userName.toUpperCase() 
                && u.pass == data.password);
            if (found) {
                dispatch(saveToken(uuidv4()))
                dispatch(saveProfile({
                    userName: found.name,
                    address: found.address,
                    phone: found.phone,
                    role: found.role,
                },))

                navigate("/profile")
            }else{
                setError("Ошибка входа")
            }
        })}>
            <div>
                Авторизация
            </div>

            <div className={s.error}>
                {error}
            </div>
            <div>
                (имя: user, пароль: 123 )
            </div>
            <div>
                (имя: admin, пароль: 456 )
            </div>

            <div className={s.containerColumn}>
                <label>Имя:</label>
                <input {...register('userName')} />
            </div>

            <div className={s.containerColumn}>
                <label>Пароль:</label>
                <input {...register('password')} type="password" />
            </div>

            <button className={s.button} type="submit">Войти</button>
        </form>
    )
}