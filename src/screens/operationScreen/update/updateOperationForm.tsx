import React, { memo, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../components/operationForms/types';
import { isNotDefinedString } from '../../../components/forms/validation';
import { Title } from '../../../components/forms/title/title';
import { OperationForm } from '../../../components/operationForms/createOperationForm';
import '../update/updateOperationForm.css';

export const UpdateOperationForm = memo(() => {
  const { t } = useTranslation();

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: 'Test',
        cost: 50,
        category: 'CategoryTest',
      },
      onSubmit: (values, { setErrors }) => {
        console.log('Операция обновлена:', initialValues.name, 'новое имя:', values.name);
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
      <Title className="title">{'Редактировать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
        <Button type="primary" onClick={submitForm}>
          {'Сохранить'}
        </Button>
      </div>
    </div>
  );
});

UpdateOperationForm.displayName = 'CreateOperationForm';
