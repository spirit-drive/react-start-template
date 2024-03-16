import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types.d';
import { UserOutlined } from '@ant-design/icons';
import { getValidates } from '../../../forms/validation';
import { FormItem } from '../../../forms/formItem/formItem';
import { AuthFormProps } from '../../types';

export type EmailFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const EmailField = memo<EmailFieldProps>(
  ({ onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title="Логин" required validateStatus={validateStatus} help={help}>
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="test@mail.com"
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField';
