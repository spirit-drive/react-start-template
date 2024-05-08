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
import { gql, useMutation } from '@apollo/client';
import { storage } from 'src/utils/storage';
import { Mutation } from 'src/graphql.types';
import { Link } from 'react-router-dom';

const SING_IN = gql`
  mutation ($password: String!, $email: String!) {
  profile {
    signin(password: $password, email: $email) {
    token
   }
  } 
}`;

export type SignInBodyVariables = {
  email: string;
  password: string;
};

export const SingInForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signin, { loading, error }] = useMutation<Pick<Mutation, 'profile'>, SignInBodyVariables>(SING_IN);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<AuthFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        email: undefined,
        password: undefined,
      },
      onSubmit: (values, { setErrors }) => {
        signin({
          variables: { email: values.email, password: values.password },
        })
          .then((res) => {
            dispatch(profileActions.setToken(res.data.profile.signin.token));
            storage.set('token', res.data.profile.signin.token);
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
      <Link to='/regustration'>
        {'Зарегистрироваться'}
      </Link>
    </div >
  );
});

SingInForm.displayName = 'SingInForm';
