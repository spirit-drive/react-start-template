import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../components/operationForms/types';
import { isNotDefinedString } from '../../../components/forms/validation';
import { Title } from '../../../components/forms/title/title';
import { OperationForm } from '../../../components/operationForms/createOperationForm';
import '../create/createOperationForm.css';

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
      },
      onSubmit: (values, { setErrors }) => {
        console.log('Операция создана :', values.name);
      },
      validate: (values) => {
        const errors = {} as OperationFormErrors;
        if (isNotDefinedString(values.name) || isNotDefinedString(values.category)) {
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
    <div className="modal">
      <Title className="title">{'Создать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Сохранить'}
        </Button>
      </div>
    </div>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';
