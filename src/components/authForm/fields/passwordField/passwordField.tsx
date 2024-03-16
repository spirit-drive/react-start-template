import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types.d';
import { getValidates } from '../../../forms/validation';
import { FormItem } from '../../../forms/formItem/formItem';
import { AuthFormProps } from '../../types';

export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const PasswordField = memo<PasswordFieldProps>(({ onChange, onBlur, touched, value, errors, submitCount }) => {
  const { validateStatus, help } = getValidates(errors, touched, submitCount);

  return (
    <FormItem title="Пароль" required validateStatus={validateStatus} help={help}>
      <Input
        data-cy="input"
        autoFocus
        name="password"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder="Пароль"
      />
    </FormItem>
  );
});

PasswordField.displayName = 'PasswordField';
