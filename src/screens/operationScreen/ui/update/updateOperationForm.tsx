import React, { FC, memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../../components/operationForms/types';
import { isNotDefinedString } from '../../../../components/forms/validation';
import { Title } from '../../../../components/forms/title/title';
import { OperationForm } from '../../../../components/operationForms/createOperationForm';
import '../update/updateOperationForm.css';
import { gql, useMutation } from '@apollo/client';
import { Mutation, OperationType, OperationUpdateInput } from '../../../../graphql.types';
import { GET_OPERATIONS } from '../../operationScreen';
import { profileSelector } from '../../../../entities/profileSlice';
import { useSelector } from 'react-redux';

const UPDATE_OPERATIONS = gql`
  mutation ($input: OperationUpdateInput!, $id: ID!) {
    operations {
      put(input: $input, id: $id) {
        ... on Cost {
          name
          desc
          date
          createdAt
          updatedAt
          amount
          category {
            createdAt
            id
            name
            photo
            updatedAt
          }
          type
        }
        ... on Profit {
          name
          desc
          date
          createdAt
          updatedAt
          amount
          category {
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
  }
`;

export type AddBodyVariables = {
  id: string;
  input: OperationUpdateInput;
};

interface ModalProps {
  id: string;
}

export const UpdateOperationForm: FC<ModalProps> = memo(({ id }) => {
  const { t } = useTranslation();
  const [put, { loading, error }] = useMutation<Pick<Mutation, 'operations'>, AddBodyVariables>(UPDATE_OPERATIONS);
  const { costList } = useSelector(profileSelector);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    const costValue = costList.find((x) => x.id == id);
    return {
      initialValues: {
        name: costValue.name,
        cost: costValue.amount,
        description: costValue.desc,
      },
      onSubmit: (values, { setErrors }) => {
        put({
          variables: {
            id: id,
            input: {
              amount: values.cost,
              desc: values.description,
              categoryId: '663a685e40505ca249a23652',
              date: new Date(),
              type: OperationType.Cost,
              name: values.name,
            },
          },
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
  }, [t]);

  const formManager = useFormik<OperationFormValues>({
    initialValues,
    onSubmit,
    validate,
  });

  const { submitForm } = formManager;

  return (
    <div>
      <Title className="title">{'Редактировать операцию'}</Title>
      <OperationForm formManager={formManager} isUpdate={true} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Сохранить'}
        </Button>
      </div>
    </div>
  );
});

UpdateOperationForm.displayName = 'UpdateOperationForm';
