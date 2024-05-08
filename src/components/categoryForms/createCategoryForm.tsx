import React, { memo } from 'react';
import { CategoryFormProps } from '../categoryForms/type';
import { FormInput } from '../forms/formInput/formInput';

export const CategoryForm = memo<CategoryFormProps>(({ formManager, formElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <FormInput
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        disabled={disabled}
        title="Название"
        nameInput="name"
        type="input"
      />
    </form>
  );
});

CategoryForm.displayName = 'CategoryForm';
