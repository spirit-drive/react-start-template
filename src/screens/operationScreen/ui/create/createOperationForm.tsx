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
import { createRandomOperation } from 'src/objects/mainObjects';

export const CreateOperationForm = memo(() => {
  const { t } = useTranslation();
  const theme = useContext(ThemeContext);
  const { authProfileInfo } = useSelector(profileSelector);
  const navigate = useNavigate();
  const { costList } = useSelector(profileSelector);
  const dispatch = useDispatch();
  
  if(!authProfileInfo?.isAdmin) {
    console.log('Операция доступна только админу. Заполните профиль пользователя');
    navigate('/profile');
  }

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
        const cost = createRandomOperation('12.12.2023');
        dispatch(profileActions.setCostList([...costList, cost]));    
        navigate('/operations');    
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
