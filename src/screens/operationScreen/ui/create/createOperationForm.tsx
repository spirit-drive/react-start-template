import React, { memo, useContext, useMemo } from 'react';
import { FormikConfig, useFormik } from 'formik';

import { useTranslation } from 'react-i18next';
import { OperationFormErrors, OperationFormValues } from '../../../../components/operationForms/types';
import { isNotDefinedString } from '../../../../components/forms/validation';
import { Title } from '../../../../components/forms/title/title';
import { OperationForm } from '../../../../components/operationForms/createOperationForm';
import '../create/createOperationForm.css';
import ThemeContext from 'src/components/layout/layout';
import { Button } from 'src/components/button/Button';

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  
  const { initialValues, onSubmit, validate } = useMemo<
    Pick<FormikConfig<OperationFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: '',
        cost: '',
        category: '',
        description: '',
      },
      onSubmit: (values) => {
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

  const backgroundColor = theme == 'dark' ? '#b4c4d1' : '#4682b4';

  return (
    <div className="modal">
      <Title className="title">{'Создать операцию'}</Title>
      <OperationForm formManager={formManager} />
      <div>
       <Button
            primary={true}
            size={'m'}
            backgroundColor={backgroundColor}
            label={t('Save')}
            func={submitForm}
          />
      </div>
    </div>
  );
});

CreateOperationForm.displayName = 'CreateOperationForm';
