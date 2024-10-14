import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { PasswordFormField } from '../../../FormField/PasswordFormField';
import { RegisterFormValues } from 'src/types/RegisterFormTypes';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../../app/redux/user';
import { message } from 'antd';
import { AppDispatch, AppState } from 'src/app/redux/store';

export const RegisterFormThunk = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { error, status } = useSelector<AppState, AppState['user']>((state) => state.user);

  const formManager = useFormik<RegisterFormValues>({
    initialValues: { email: '', password: '' },
    onSubmit: (values, actions) => {
      dispatch(register(values)).then((res) => {
        console.log('form register', res);
        if (status == 'resolve') {
          message.success(res.meta.arg.email + ' Ok', 10);
          actions.resetForm();
        }
      });
    },
    validate: (values) => {
      // console.log('validate on client skip', values);
    },
  });

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);
  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4 className="p-4">{t('forms.RegisterForm.Title')} redux-thunk</h4>
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

RegisterFormThunk.displayName = 'RegisterFormThunk';
