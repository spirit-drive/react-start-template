import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { getServerErrorCode, isNotDefinedString, isValidFileType } from '../../../../utils/validation';
import { CategoryFormValues, CategoryFormErrors } from '../types/CategoryFormTypes';
import { useMutation } from '@apollo/client';
import {
  ADD_CATEGORY,
  CategoryAddData,
  CategoryAddInput,
  GET_CATEGORIES,
} from 'src/helper/connections/categoriesConnections';
import { categoryActions } from 'src/app/redux/category';
import { message } from 'antd';

export type TypeForm = {
  closeModal?: () => void;
};

export const CategoryAddForm: FC<TypeForm> = ({ closeModal }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [add] = useMutation<CategoryAddData, CategoryAddInput>(ADD_CATEGORY, {
    onCompleted: (data) => {
      message.info(t(`Forms.CategoryForm.SuccessMessage`));
      console.log(data);
      dispatch(categoryActions.add(data.categories.add));
    },
    onError: (error) => {
      message.error(t(`Errors.${getServerErrorCode(error)}`));
    },
    refetchQueries: [GET_CATEGORIES],
  });

  const validate = (values: CategoryFormValues) => {
    const errors = {} as CategoryFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`Errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<CategoryFormValues>({
    initialValues: {
      name: undefined,
    },
    onSubmit: (values, actions) => {
      add({ variables: { input: { name: values.name } } });
      actions.resetForm();
      if (closeModal) closeModal();
    },
    validate,
  });

  const { handleSubmit, values, touched, errors, submitCount, handleBlur, handleChange } = formManager;

  return (
    <form>
      <TextFormField
        onBlur={handleBlur}
        onChange={handleChange}
        submitCount={submitCount}
        errors={errors.name}
        touched={touched.name}
        name="name"
        value={values.name}
        placeholder={t(`forms.AddCategoryForm.Name.placeholder`)}
        title={t(`forms.AddCategoryForm.Name.title`)}
      />
      <Button type="submit" variant="primary" size="small" onClick={handleSubmit}>
        {t(`forms.AddCategoryForm.Button.title`)}
      </Button>
    </form>
  );
};
