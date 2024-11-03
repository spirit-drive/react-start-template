import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/components/Buttons/Button/Button';
import { TextFormField } from '../../../FormField/TextFormField';
import { isNotDefinedString } from '../../../../utils/validation';
import { CategoryFormValues, CategoryFormErrors } from '../types/CategoryFormTypes';
import { useCreateCategoryMutation } from 'src/shared/api/rtk/categoriesApi';

export type TypeForm = {
  closeModal?: () => void;
};

export const CategoryAddForm: FC<TypeForm> = ({ closeModal }) => {
  const { t } = useTranslation();

  const [createCategory, { isLoading: createCategoryLoading, error: createCategoryError }] =
    useCreateCategoryMutation();

  const validate = (values: CategoryFormValues) => {
    const errors = {} as CategoryFormErrors;
    if (isNotDefinedString(values.name)) {
      errors.name = t(`Errors.is_required`);
    }
    return errors;
  };

  const formManager = useFormik<CategoryFormValues>({
    initialValues: {
      name: '',
    },
    onSubmit: (values, actions) => {
      createCategory(values);
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
