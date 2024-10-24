import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../Buttons/Button/Button';
import { isNotDefinedString, isNotValidEmail, getServerErrorCode } from '../../../../utils/validation';
import { TextFormField } from '../../../FormField/TextFormField';
import { PasswordFormField } from '../../../FormField/PasswordFormField';
import { LoginFormErrors, LoginFormValues } from '../types/LoginFormTypes';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenActions } from '../../../../app/redux/token';
import { useMutation } from '@apollo/client';
import { message } from 'antd';
import { SIGN_IN, SigninData } from 'src/helper/connections/profileConnections';
import { userActions } from 'src/app/redux/user';
export interface LoginFormProps extends LoginFormValues {
  title: string;
}

export const LoginForm = memo(({ title }: LoginFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signin] = useMutation<SigninData, LoginFormValues>(SIGN_IN, {
    onCompleted: (data) => {
      const token = data.profile.signin.token;
      if (data && token) {
        dispatch(tokenActions.generate(token));
        dispatch(userActions.setInfo(data.profile.signin));
        navigate('/');
      }
    },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
  });

  const validate = (values: LoginFormValues) => {
    const errors = {} as LoginFormErrors;
    if (isNotDefinedString(values.email)) {
      errors.email = t('errors.is_required');
    }

    if (!isNotDefinedString(values.email) && !isNotValidEmail(values.email)) {
      errors.email = t('errors.is_not_valid_email');
    }

    if (isNotDefinedString(values.password)) {
      errors.password = t('errors.is_required');
    }

    return errors;
  };

  const formManager = useFormik<LoginFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      signin({ variables: { email: values.email, password: values.password } });
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h5>{title}</h5>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        name="email"
        placeholder={t('forms.LoginForm.Email.placeholder')}
        title={t('forms.LoginForm.Email.title')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        placeholder={t('forms.LoginForm.Password.placeholder')}
        title={t('forms.LoginForm.Password.title')}
      />

      <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
        {t('forms.LoginForm.Button.title')}
      </Button>
    </form>
  );
});

LoginForm.displayName = 'LoginForm';
