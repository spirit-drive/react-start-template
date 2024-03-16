import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProfileForm} from '../../components/profileForm/profileForm';
import { isNotDefinedString } from '../../components/forms/validation';
import { Title } from '../../components/forms/title/title';
import { ProfileFormErrors, ProfileFormValues } from 'src/components/profileForm/types';

export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(({ className }) => {
  const { t } = useTranslation();
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    
    return {
      initialValues: {
        name:'',
        about: '',
      },
      onSubmit: (values, { setErrors }) => {
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
  }, [ t ]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  return (
    <div className='root'>
      <Title className='title'>{'Профиль пользователя'}</Title>
      <ProfileForm formManager={formManager} />
      <Button type="primary"  onClick={submitForm}>
        {'Сохранить'}
      </Button>
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';