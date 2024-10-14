import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { PasswordFormField } from '../../../FormField/PasswordFormField';
import { RegisterFormValues } from 'src/types/RegisterFormTypes';
import { useDispatch } from 'react-redux';
import { signup } from '../../../../shared/api/user';
import { message } from 'antd';
import { userActions } from '../../../../app/redux/user';

export const RegisterForm = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formManager = useFormik<RegisterFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      signup({ email: values.email, password: values.password })
        .then((res) => {
          dispatch(userActions.setInfo(res));
          message.success(res.profile.email + ' Ok', 10);
          actions.resetForm();
        })
        .catch((error) => {
          message.error(error.message, 10);
        });
    },
    validate: (values) => {
      // console.log('validate on client skip', values);
    },
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4 className="p-4">{t('forms.RegisterForm.Title')}</h4>
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
