import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { AuthFormErrors, AuthFormValues } from '../../../components/authForm/types';
import { isNotDefinedString } from '../../../components/forms/validation';
import { Title } from '../../../components/forms/title/title';
import { AuthForm } from '../../../components/authForm/authForm';
import { useDispatch } from '../../../store/useDispatch';
import { profileActions, profileSelector } from '../../../entities/profileSlice';
import { useNavigate } from 'react-router';

export const SingInForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        email: undefined,
        password: undefined,
      },
      onSubmit: (values, { setErrors }) => {
        dispatch(profileActions.setToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'));
        navigate('/profile');
      },
      validate: (values) => {
        const errors = {} as AuthFormErrors;
        if (isNotDefinedString(values.email)) {
          errors.email = 'Обязательно для заполнения';
        } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
          errors.email = 'Значение указано некорректно';
        }
        if (isNotDefinedString(values.password)) {
          errors.password = 'Обязательно для заполнения';
        } else if (
          !/^((?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,32})$/.test(values.password)
        ) {
          errors.password =
            'Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы (!@#$%^&*). Минимум 6 и максимум 32 символов';
        }
        return errors;
      },
    };
  }, [dispatch, t]);

  const formManager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <div>
      <Title className="title">{'Вход в систему'}</Title>
      <AuthForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Войти'}
        </Button>
      </div>
    </div>
  );
});

SingInForm.displayName = 'SingInForm';
