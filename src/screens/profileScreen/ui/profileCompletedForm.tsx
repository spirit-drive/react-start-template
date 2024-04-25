import React, { memo, useContext, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';

import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../../../components/profileForm/profileForm';
import { isNotDefinedString } from '../../../components/forms/validation';
import { Title } from '../../../components/forms/title/title';
import { ProfileFormErrors, ProfileFormValues } from '../../../components/profileForm/types';
import { Button } from '../../../components/button/Button';
import ThemeContext from '../../../components/layout/layout';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
        about: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательно для заполнения';
        }
        return errors;
      },
    };
  }, [t]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm } = formManager;

  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div className="root">
      <Title className="title">{'Профиль пользователя'}</Title>
      <ProfileForm formManager={formManager} />
      <Button
            primary={true}
            size={'m'}
            backgroundColor={backgroundColor}
            label={t('Save')}
            func={submitForm}
          />
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
