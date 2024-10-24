import React, { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { ProfileFormErrors, ProfileFormValues } from '../types/ProfileFormTypes';
import { isNotDefinedString } from '../../../../utils/validation';
import { useSelector } from 'react-redux';
import { AppState } from 'src/app/redux/store';

export const ProfileForm: FC = () => {
  const { t } = useTranslation();
  const { user } = useSelector<AppState, AppState['user']>((state): AppState['user'] => state.user);

  const validate = (values: ProfileFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`errors.is_required`);
    }
    return errors;
  };

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues: { name: user.name },
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
        placeholder={t('forms.ProfileForm.Name.title')}
        title={t('forms.ProfileForm.Name.title')}
      />
      <Button type="submit" variant="primary" size="small" onClick={handleSubmit}>
        {t('forms.ProfileForm.Button.title')}
      </Button>
    </form>
  );
};
