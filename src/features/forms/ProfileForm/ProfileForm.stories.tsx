import React, { useEffect, useMemo, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormikConfig, useFormik } from 'formik';
import ProfileForm from './ProfileForm';
import { ProfileFormErrors, ProfileFormValues } from './types';
import { isNotDefinedString } from '../../../utils/validation';
import { Button } from 'antd';


const meta: Meta<typeof ProfileForm> = {
    title: 'Components/ProfileForm',
    component: ProfileForm,
    argTypes: { }
}

export default meta;

export const Main: StoryObj<typeof ProfileForm> = {
    render: () => {
        const [profile, setProfile] = useState({ id: '',  email: '', signUpDate: '', commandId: '' })

        const { onSubmit, validate, initialValues } = useMemo<
            Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
        >(() => {
            return {
                initialValues: {
                    id: profile.id,
                    email: profile.email,
                    signUpDate: profile.signUpDate,
                    commandId: profile.commandId
                },
                onSubmit: (values, { setErrors }) => {
                    try {
                        // Сохранение данных формы
                        // value - содержит поля формы
                        console.debug('save profile', values)

                    } catch (error) {
                        // Ошибка сохранения данных формы
                        console.log('save error', error)
                    }
                },
                validate: (values) => {
                    // Валидация формы
                    // value - содержит поля формы
                    const errors = {} as ProfileFormErrors;
                    if (isNotDefinedString(values.email)) {
                        errors.email = 'Обязательное поле'
                    }
                    return errors;
                },
            };
        }, [profile]);

        const formManager = useFormik<ProfileFormValues>({
            initialValues,
            onSubmit,
            validate,
        });
        const { submitForm, setValues } = formManager;

        useEffect(() => {
            console.log('formManager')
        }, [profile, setValues])

        return (
            <>
                <ProfileForm formManager={formManager} />
                <Button type="primary" onClick={submitForm}>
                    Сохранить
                </Button>
            </>
        )
    },
    args: {}
};
