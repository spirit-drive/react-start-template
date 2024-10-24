import React, { memo } from 'react';
import { Input } from 'antd';
import { FormItem } from '../FormItem/FormItem';
import { getValidates } from '../../utils/validation';
import { FormFieldProps } from '../../types/FormFieldTypes';

export const TextFormField = memo<FormFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount, name, placeholder, title }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title={title} validateStatus={validateStatus} help={help}>
        <Input
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </FormItem>
    );
  }
);

TextFormField.displayName = 'TextFormField';
