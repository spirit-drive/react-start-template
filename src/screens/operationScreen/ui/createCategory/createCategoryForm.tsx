import React, { memo, useContext, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';

import { useTranslation } from 'react-i18next';
import { isNotDefinedString } from '../../../../components/forms/validation';
import { Title } from '../../../../components/forms/title/title';
import '../createCategory/createCategoryForm.css';
import ThemeContext from '../../../../components/layout/layout';
import { Button } from '../../../../components/button/Button';
import { useNavigate } from 'react-router';
import { gql, useMutation } from '@apollo/client';
import { CategoryAddInput, Mutation, UpdateProfileInput } from '../../../../graphql.types';
import { CategoryForm } from '../../../../components/categoryForms/createCategoryForm';
import { CategoryFormErrors, CategoryFormValues } from '../../../../components/categoryForms/type';

const ADD_CATEGORIES = gql`
  mutation ($input: CategoryAddInput!) {
    categories {
      add(input: $input) {
        id
        name
        photo
        createdAt
        updatedAt
      }
    }
  }
`;

export type AddCategoryBodyVariables = {
  input: CategoryAddInput;
};

export const CreateCategoryForm = memo(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const [add, { loading, error }] = useMutation<Pick<Mutation, 'categories'>, AddCategoryBodyVariables>(ADD_CATEGORIES);

  const { initialValues, onSubmit, validate } = useMemo<
    Pick<FormikConfig<CategoryFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
        photo: '',
      },
      onSubmit: (values) => {
        add({
          variables: {
            input: { name: values.name, photo: '' },
          },
        })
          .then((res) => {
            navigate('/operations');
          })
          .catch((err) => console.error(err));
      },
      validate: (values) => {
        const errors = {} as CategoryFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательно для заполнения';
        }
        return errors;
      },
    };
  }, [t]);

  const formManager = useFormik<CategoryFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div>
      <Title className="title">{'Создать категорию'}</Title>
      <CategoryForm formManager={formManager} />
      <div>
        <Button primary={true} size={'m'} backgroundColor={backgroundColor} label={t('Save')} func={submitForm} />
      </div>
    </div>
  );
});

CreateCategoryForm.displayName = 'CreateCategoryForm';
