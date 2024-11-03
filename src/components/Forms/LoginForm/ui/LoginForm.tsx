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
import { message } from 'antd';
import { signIn } from 'src/features/Auth/service/user';
import { AppDispatch } from 'src/app/store/store';

export const LoginForm = memo(() => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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
      dispatch(signIn({ email: values.email, password: values.password }))
        .then((data) => {
          if (data.type.includes('fulfilled')) {
            message.success(t(`forms.LoginForm.Message`));
            actions.resetForm();
            navigate(-1);
          } else {
            message.error('Login error');
          }
        })
        .catch((error) => {
          message.error(error.message, 10);
        });
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4 className="py-4">{t(`forms.LoginForm.Title`)}</h4>
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
