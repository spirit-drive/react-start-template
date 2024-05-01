import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types.d';
import { FormItem } from '../formItem/formItem';
import { getValidates } from '../validation';
import { ProfileFormProps } from '../../../components/profileForm/types';

export type FormInputProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  title: string;
  placeholder?: string;
  nameInput: string;
  type: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const FormInput = memo<FormInputProps>(
  ({ onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount, title, nameInput, type, placeholder }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title={title} required validateStatus={validateStatus} help={help}>
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          autoFocus
          name={nameInput}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder ? placeholder : title}
          type={type}
        />
      </FormItem>
    );
  }
);

FormInput.displayName = 'FormInput';
