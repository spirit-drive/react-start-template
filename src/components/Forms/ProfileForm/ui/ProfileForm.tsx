import React, { FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { TextAreaFormField } from '../../../FormField/TextAreaFormField';
import { ProfileFormErrors, ProfileFormValues } from '../types/ProfileFormTypes';

export const ProfileForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: ProfileFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (!values.name) {
      errors.name = t('errors.is_required');
    }
    return errors;
  };

  const formManager = useFormik<ProfileFormValues>({
    initialValues: { name: '', about: '' },
    onSubmit: (values, actions) => {
      console.log('values: ', values);
      actions.resetForm();
    },
    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <h4>{t('forms.ProfileForm.Title')}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        name="name"
        placeholder={t('forms.ProfileForm.Name.placeholder')}
        title={t('forms.ProfileForm.Name.title')}
      />

      <TextAreaFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.about}
        errors={errors.about}
        submitCount={submitCount}
        touched={touched.about}
        name="about"
        placeholder={t('forms.ProfileForm.Name.title')}
        title={t('forms.ProfileForm.Name.title')}
      />
      <Button type="submit" variant="primary" size="small" onClick={handleSubmit}>
        {t('forms.ProfileForm.Button.title')}
      </Button>
    </form>
  );
};
