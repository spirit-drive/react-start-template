import React, { memo } from 'react';
import { FormInput } from '../forms/formInput/formInput';
import { ProfileFormProps } from './types';

export const ProfileForm = memo<ProfileFormProps>(({ formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <FormInput
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        disabled={disabled}
        nameInput="name"
        type="input"
      />
    </form>
  );
});

ProfileForm.displayName = 'ProfileForm';
