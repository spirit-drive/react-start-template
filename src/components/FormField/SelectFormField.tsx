import React, { memo } from 'react';
import { Select } from 'antd';
import { FormItem } from '../FormItem/FormItem';
import { getValidates } from '../../utils/validation';
import { SelectFieldProps } from '../../types/FormFieldTypes';

export const SelectFormField = memo<SelectFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount, placeholder, title, options }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title={title} validateStatus={validateStatus} help={help}>
        <Select
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          options={options}
        />
      </FormItem>
    );
  }
);

SelectFormField.displayName = 'SelectFormField';
