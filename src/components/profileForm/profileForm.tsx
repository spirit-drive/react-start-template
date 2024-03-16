import React, { memo } from 'react';
import { ProfileFormProps } from './types';
import { NameField } from './fields/nameField/nameField';
import { AboutField } from './fields/aboutField/aboutField';

export const ProfileForm = memo<ProfileFormProps>(({ formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

  return (
    <form ref={formElement} onSubmit={handleSubmit}>
      <NameField
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        errors={errors.name}
        submitCount={submitCount}
        touched={touched.name}
        disabled={disabled}
      />
      <AboutField
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.about}
        errors={errors.about}
        submitCount={submitCount}
        touched={touched.about}
        disabled={disabled}
      />
    </form>
  );
});

ProfileForm.displayName = 'ProfileForm';
