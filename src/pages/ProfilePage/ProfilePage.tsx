import React, { useEffect } from "react"
import { Layout } from "../../shared/Layout"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import s from './ProfilePage.module.sass'
import { Form, SubmitHandler, useForm } from "react-hook-form"
import { profileUpdate } from "../../store/slices/saga/profileUpdateSaga"
import { TProfile } from "../../shared/profileTypes/profileTypes"

export const ProfilePage = () => {
    const dispatcher = useAppDispatch();
    const profile = useAppSelector(state => state.authAndProfile.profile);
    const isUpdating = useAppSelector(state => state.authAndProfile.updating.isUpdating);
    const error = useAppSelector(state => state.authAndProfile.error);

    const { register, handleSubmit, reset } = useForm<TProfile>({
        defaultValues: { ...profile },
    });

    useEffect(() => {
        reset({ ...profile })
    }, [profile])

    const onSubmit: SubmitHandler<TProfile> = (data) => {
        dispatcher(profileUpdate(data));
    }

    if (profile.email == undefined || profile.email == '') {
        return (
            <div>{'Ожидайте. Загрузка'}</div>
        )
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={s.containerColumn}>
                    <div>
                        Профиль пользователя
                    </div>

                    {error.isError &&
                        <div className={s.red} >{error.errorMessage}</div>
                    }
                    {isUpdating &&
                        <div>{'Обновление профиля...'}</div>
                    }

                    <div className={s.containerRow}>
                        <div>Имя:</div>
                        <input {...register('name')} />
                    </div>

                    <div className={s.containerRow}>
                        <div>Почта:</div>
                        <input {...register('email')} readOnly={true}/>
                    </div>

                    <div className={s.containerRow}>
                        <div>Дата регистрации:</div>
                        <input {...register('signUpDate')} disabled={true} />
                    </div>

                </div>

                <button type="submit">Сохранить</button>
            </form >
        </Layout >
    )
}