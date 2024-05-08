import React, { memo, useContext, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';

import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../../components/operationForms/types';
import { isNotDefinedString } from '../../../../components/forms/validation';
import { Title } from '../../../../components/forms/title/title';
import { OperationForm } from '../../../../components/operationForms/createOperationForm';
import '../create/createOperationForm.css';
import ThemeContext from '../../../../components/layout/layout';
import { Button } from '../../../../components/button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions, profileSelector } from '../../../../entities/profileSlice';
import { useNavigate } from 'react-router';
import { createRandomOperation } from '../../../../objects/mainObjects';
import { gql, useMutation } from '@apollo/client';
import { Mutation, OperationAddInput, OperationType } from 'src/graphql.types';
import { GET_OPERATIONS } from '../../operationScreen';
import { useOperation } from 'src/components/operationForms/lib/useOperation';


const ADD_OPERATIONS = gql`
  mutation ($input: OperationAddInput!) {
    operations {
    add(input: $input) {
      ...on Cost {
        id
        name
        desc
        date
        createdAt
        updatedAt
        amount
        category{
          createdAt
          id
          name
          photo
          updatedAt
        }
        type
      }
      ...on Profit {
        id
        name
        desc
        date
        createdAt
        updatedAt
        amount
        category{
          createdAt
          id
          name
          photo
          updatedAt
        }
        type
      }
   }
  } 
}`;

export type AddBodyVariables = {
  input: OperationAddInput;
};

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const [add, { loading, error }] = useMutation<Pick<Mutation, 'operations'>, AddBodyVariables>(ADD_OPERATIONS);
  const { category } = useOperation();
  const { initialValues, onSubmit, validate } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
        cost: 0,
        category: '',
        description: '',
      },
      onSubmit: (values) => {
        add({
          variables: { input: { amount: values.cost, desc: values.description, categoryId: category.id, date: new Date(), type: OperationType.Cost, name: values.name } },
          refetchQueries: [{ query: GET_OPERATIONS }],
        })
          .then((res) => console.error(res))
          .catch((err) => console.error(err));
      },
      validate: (values) => {
        const errors = {} as OperationFormErrors;
        if (isNotDefinedString(values.name)) {
          errors.name = 'Обязательно для заполнения';
        }
        return errors;
      },
    };
  }, [t, category]);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div>
      <Title className="title">{'Создать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
        <Button primary={true} size={'m'} backgroundColor={backgroundColor} label={t('Save')} func={submitForm} />
      </div>
    </div>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';
