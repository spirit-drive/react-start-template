import React, { FC, memo } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { isNotDefinedString } from '../../../../utils/validation';
import { PasswordFormField } from '../../../FormField/PasswordFormField';
import { ChangePasswordFormErrors, ChangePasswordFormValues } from '../types/ChangePasswordFormTypes';

export const ChangePasswordForm: FC = memo(() => {
  const { t } = useTranslation();

  const validate = (values: ChangePasswordFormValues) => {
    const errors = {} as ChangePasswordFormErrors;
    if (isNotDefinedString(values.password)) {
      errors.password = t('errors.is_required');
    }
    if (isNotDefinedString(values.newPassword)) {
      errors.newPassword = t('errors.is_required');
    }
    if (isNotDefinedString(values.repeatPassword)) {
      errors.repeatPassword = t('errors.is_required');
    }
    if (values.repeatPassword !== values.newPassword) {
      errors.newPassword = t('errors.not_same_password');
      errors.repeatPassword = t('errors.not_same_password');
    }
    return errors;
  };

  const formManager = useFormik<ChangePasswordFormValues>({
    initialValues: { password: undefined, newPassword: undefined, repeatPassword: undefined },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <>
      <h4>{t('forms.ChangePasswordForm.Title')}</h4>
      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        name="password"
        placeholder={t('forms.ChangePasswordForm.Password.placeholder')}
        title={t('forms.ChangePasswordForm.Password.title')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.newPassword}
        errors={errors.newPassword}
        submitCount={submitCount}
        touched={touched.newPassword}
        name="newPassword"
        placeholder={t('forms.ChangePasswordForm.NewPassword.placeholder')}
        title={t('forms.ChangePasswordForm.NewPassword.title')}
      />

      <PasswordFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.repeatPassword}
        errors={errors.repeatPassword}
        submitCount={submitCount}
        touched={touched.repeatPassword}
        name="repeatPassword"
        placeholder={t('forms.ChangePasswordForm.RepeatPassword.placeholder')}
        title={t('forms.ChangePasswordForm.RepeatPassword.title')}
      />
      <Button type="submit" variant="primary" size="small" onClick={handleSubmit}>
        {t('forms.ChangePasswordForm.Button.title')}
      </Button>
    </>
  );
});

ChangePasswordForm.displayName = 'ChangePasswordForm';
