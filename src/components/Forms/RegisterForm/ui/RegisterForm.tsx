import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { PasswordFormField } from '../../../FormField/PasswordFormField';
import { RegisterFormValues, RegisterFormErrors } from 'src/types/RegisterFormTypes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from 'src/app/store/store';
import { message } from 'antd';
import { userActions, signUp } from 'src/features/Auth/service/user';
import { isNotDefinedString, isNotValidEmail } from 'src/utils/validation';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector<AppState, AppState['user']>((state) => state.user);
  const navigate = useNavigate();
  const formManager = useFormik<RegisterFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      dispatch(signUp({ email: values.email, password: values.password }))
        .then((data) => {
          if (data.type.includes('fulfilled')) {
            message.success(t(`form.RegisterForm.Messages`));
            navigate('/login', { replace: true });
          } else {
            message.error('Register failed');
          }
        })
        .catch((error) => {
          message.error(error.message, 10);
        });
      actions.resetForm();
    },
    validate: (values) => {
      const errors = {} as RegisterFormErrors;
      if (isNotDefinedString(values.email)) {
        errors.email = t(`Errors.is_required`);
      }

      if (!isNotDefinedString(values.email) && !isNotValidEmail(values.email)) {
        errors.email = t(`Errors.is_not_valid_email`);
      }

      if (isNotDefinedString(values.password)) {
        errors.password = t(`Errors.is_required`);
      }
      return errors;
    },
  });

  useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(userActions.clearError());
    }
  }, [error, dispatch]);

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4 className="py-4">{t('forms.RegisterForm.Title')}</h4>
      <form>
        <TextFormField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          errors={errors.email}
          submitCount={submitCount}
          touched={touched.email}
          name="email"
          placeholder={t('forms.RegisterForm.Email.placeholder')}
          title={t('forms.RegisterForm.Email.title')}
        />

        <PasswordFormField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password}
          errors={errors.password}
          submitCount={submitCount}
          touched={touched.password}
          name="password"
          placeholder={t('forms.RegisterForm.Password.placeholder')}
          title={t('forms.RegisterForm.Password.title')}
        />

        <Button type="submit" variant={'primary'} size="small" onClick={handleSubmit}>
          {t('forms.RegisterForm.Button.title')}
        </Button>
      </form>
    </>
  );
});

RegisterForm.displayName = 'RegisterForm';
