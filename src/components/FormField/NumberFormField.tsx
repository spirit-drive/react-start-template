import React, { memo } from 'react';
import { InputNumber } from 'antd';
import { FormItem } from '../FormItem/FormItem';
import { getValidates } from '../../utils/validation';
import { NumberFormFieldProps } from '../../types/FormFieldTypes';

export const NumberFormField = memo<NumberFormFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount, name, placeholder, title }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title={title} validateStatus={validateStatus} help={help}>
        <InputNumber
          disabled={disabled}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          style={{
            width: '100%',
          }}
          type="number"
        />
      </FormItem>
    );
  }
);

NumberFormField.displayName = 'NumberFormField';
