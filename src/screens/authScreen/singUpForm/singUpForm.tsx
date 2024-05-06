import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { AuthFormErrors, AuthFormValues } from '../../../components/authForm/types';
import { isNotDefinedString } from '../../../components/forms/validation';
import { gql, useMutation } from '@apollo/client';
import { Mutation } from 'src/graphql.types';
import { profileActions } from '../../../entities/profileSlice';
import { AuthForm } from '../../../components/authForm/authForm';
import { Title } from 'src/components/forms/title/title';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { storage } from 'src/utils/storage';

const SING_UP = gql`
  mutation ($commandId: String!, $password: String!, $email: String!) {
  profile {
    signup(commandId: $commandId, password: $password, email: $email) {
    token
   }
  } 
}`;

export type SignUpBodyVariables = {
  commandId: string;
  email: string;
  password: string;
};

export const SingUpForm = memo(() => {

  const { t } = useTranslation();
  const [signup, { loading, error }] = useMutation<Pick<Mutation, 'profile'>, SignUpBodyVariables>(SING_UP);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        commandId: undefined,
        email: undefined,
        password: undefined,
      },
      onSubmit: (values, { setErrors }) => {
        signup({
          variables: { commandId: "1", email: values.email, password: values.password },
        })
          .then((res) => {
            dispatch(profileActions.setToken(res.data.profile.signup.token));
            storage.set('token', res.data.profile.signup.token);
            navigate('/profile');
          })
          .catch((err) => console.error(err));
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
  }, [t]);

  const formManager = useFormik<AuthFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <div>
      <Title className="title">{'Регистрация'}</Title>
      <AuthForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Зарегистрироваться'}
        </Button>
      </div>
    </div>
  );
});

SingUpForm.displayName = 'SingUpForm';
