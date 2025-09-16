import React, { memo } from 'react';
import cn from 'clsx';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types';
import { LockOutlined } from '@ant-design/icons';
import { AuthFormProps } from 'src/features/forms/AuthForm/types';
import { FormItem } from '../../../../shared/form-item/form-item';
import { getValidates } from '../../../../utils/validation';


export type PasswordFieldProps = Pick<AuthFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onPressEnter: () => void;
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <LockOutlined className="site-form-item-icon" />;

export const PasswordField = memo<PasswordFieldProps>(
  ({ className, onChange, onBlur, onPressEnter, touched, value, errors, disabled, submitCount }) => {

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        title="Пароль"
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.Password
          prefix={prefix}
          onPressEnter={onPressEnter}
          disabled={disabled}
          data-cy="input"
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Пароль"
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';
