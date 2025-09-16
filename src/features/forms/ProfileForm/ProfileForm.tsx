import React, { memo } from 'react'
import { ProfileFormProps } from './types'
import { NameField } from './NameField/NameField'
import { AboutField } from './AboutField/AboutField'

const ProfileForm = memo<ProfileFormProps>(
  ({ className, formManager, formElement, autoFocusElement, disabled }) => {
    const { values, touched, errors, submitCount, handleBlur, handleSubmit, handleChange } = formManager;

    return (
      <form ref={formElement} onSubmit={handleSubmit} className={className}>
        <NameField
          autoFocusElement={autoFocusElement}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          errors={errors.email}
          submitCount={submitCount}
          touched={touched.email}
          disabled={disabled}
        />
        <AboutField
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.signUpDate}
          errors={errors.signUpDate}
          submitCount={submitCount}
          touched={touched.signUpDate}
          disabled={disabled}
        />
      </form>
    )
  }
)

ProfileForm.displayName = 'ProfileForm'

export default ProfileForm
