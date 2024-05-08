import React, { memo, useContext, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';

import { useTranslation } from 'react-i18next';
import { ProfileForm } from '../../../components/profileForm/profileForm';
import { isNotDefinedString } from '../../../components/forms/validation';
import { ProfileFormErrors, ProfileFormValues } from '../../../components/profileForm/types';
import { Button } from '../../../components/button/Button';
import ThemeContext from '../../../components/layout/layout';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Mutation, UpdateProfileInput } from 'src/graphql.types';


const GET_PROFILE = gql`
  query getProfile {
    profile {
      id
      name
      email
    }
  }
`;

const EDIT_PROFILE = gql`
  mutation ($input: UpdateProfileInput!) {
  profile {
    update(input: $input) {
      id
      email
      name
      signUpDate
   }
  } 
}`;

export type SignInBodyVariables = {
  input: UpdateProfileInput;
};


export type ProfileCompletedFormProps = {
  className?: string;
};

export const ProfileCompletedForm = memo<ProfileCompletedFormProps>(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const { data } = useQuery(GET_PROFILE);
  const [editProfile, { loading, error }] = useMutation<Pick<Mutation, 'profile'>, SignInBodyVariables>(EDIT_PROFILE);

  // dispatch(profileActions.getProfileInfo({ name: data.name, about: data.about, isAdmin: true }));

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: data ? data.profile.email : 'test',
        email: '',
      },
      onSubmit: (values) => {
        editProfile({
          variables: {
            input: { name: values.name }
          }
        });
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательно для заполнения';
        } else if (!/^[_a-zа-я0-9-]{7,}$/i.test(values.name)) {
          errors.name = 'Значение указано некорректно. Не менее 7 символов.';
        }
        return errors;
      },
    };
  }, [t, data]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm } = formManager;

  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div className="root">
      <div>
        <h3>Профиль</h3>
        <div>имя: {data ? data.profile.name : ''}</div>
        <div>почта: {data ? data.profile.email : ''}</
        div>
      </div>
      <h3>Редактировать имя профиля</h3>
      <ProfileForm formManager={formManager} />
      <Button primary={true} size={'m'} backgroundColor={backgroundColor} label={t('Save')} func={submitForm} />
    </div>
  );
});

ProfileCompletedForm.displayName = 'ProfileCompletedForm';
