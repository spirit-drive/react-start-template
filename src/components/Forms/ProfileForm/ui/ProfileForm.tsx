import React, { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { ProfileFormErrors, ProfileFormValues } from '../types/ProfileFormTypes';
import { isNotDefinedString } from '../../../../utils/validation';
import { useEditProfileMutation, useFetchProfileQuery } from 'src/entities/Profile/api/profileApi';
import { Loader } from 'src/components/Loader/Loader';

export const ProfileForm: FC = () => {
  const { t } = useTranslation();
  const { data: profile, isFetching: profileIsLoading } = useFetchProfileQuery();
  const [editProfile, { isLoading, error }] = useEditProfileMutation();

  const validate = (values: ProfileFormValues) => {
    const errors = {} as ProfileFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<ProfileFormValues>({
    initialValues: { name: profile?.name },
    onSubmit: (values, actions) => {
      editProfile(values);
    },

    validate: validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;
  if (profileIsLoading) return <Loader />;

  return (
    <form>
      <h4 className="py-4">{t('forms.ProfileForm.Title')}</h4>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        value={profile.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        name="name"
        placeholder={t('forms.ProfileForm.Name.placeholder')}
        title={t('forms.ProfileForm.Name.title')}
      />
      <Button type="submit" variant="primary" size="small" onClick={handleSubmit}>
        {t('forms.ProfileForm.Button.title')}
      </Button>
    </form>
  );
};
