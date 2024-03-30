import React, { memo } from 'react';
import { OperationFormProps } from './types';
import { FormInput } from '../forms/formInput/formInput';

export const OperationForm = memo<OperationFormProps>(({ formManager, formElement, disabled }) => {
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
      <FormInput
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.cost}
        errors={errors.cost}
        submitCount={submitCount}
        touched={touched.cost}
        disabled={disabled}
        title="Стоимость"
        nameInput="cost"
        type="number"
      />
      <FormInput
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.category}
        errors={errors.category}
        submitCount={submitCount}
        touched={touched.category}
        disabled={disabled}
        title="Категория"
        nameInput="category"
        type="input"
      />
      <FormInput
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.description}
        errors={errors.description}
        submitCount={submitCount}
        touched={touched.description}
        disabled={disabled}
        title="Описание"
        nameInput="description"
        type="input"
      />
    </form>
  );
});

OperationForm.displayName = 'OperationForm';
