import React, { memo } from 'react'
import { AuthFormProps } from './types'
import { PasswordField } from './PasswordField/PasswordField'
import EmailField from './EmailField/EmailField'


const AuthForm = memo<AuthFormProps>(({ className, formManager, formElement, autoFocusElement, disabled }) => {
  const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange, submitForm } = formManager

  return (
    <form ref={formElement} onSubmit={handleSubmit} >
      <EmailField
        onPressEnter={submitForm}
        autoFocusElement={autoFocusElement}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        errors={errors.email}
        submitCount={submitCount}
        touched={touched.email}
        disabled={disabled}
        className={className}
      />
      <PasswordField
        onPressEnter={submitForm}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.password}
        errors={errors.password}
        submitCount={submitCount}
        touched={touched.password}
        disabled={disabled}
        className={className}
      />
    </form>
  );
});

AuthForm.displayName = 'AuthForm'

export default AuthForm