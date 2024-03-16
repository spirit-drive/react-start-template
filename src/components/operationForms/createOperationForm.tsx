import React, { memo } from 'react';
import { OperationFormProps } from './types';
import { NameField } from './fields/nameField/nameField';
import { CostField } from './fields/costField/costField';
import { CategoryField } from './fields/categoryField/categoryField';
import { DescriptionField } from './fields/descriptionField/descriptionField';

export const OperationForm = memo<OperationFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit}>
        <NameField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          errors={errors.name}
          submitCount={submitCount}
          touched={touched.name}
          disabled={disabled}
        />
       <CostField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.cost}
          errors={errors.cost}
          submitCount={submitCount}
          touched={touched.cost}
          disabled={disabled}
        />
        <CategoryField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.category}
          errors={errors.category}
          submitCount={submitCount}
          touched={touched.category}
          disabled={disabled}
        />
        <DescriptionField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.description}
          errors={errors.description}
          submitCount={submitCount}
          touched={touched.description}
          disabled={disabled}
        />
      </form>
    );
  }
);

OperationForm.displayName = 'OperationForm';