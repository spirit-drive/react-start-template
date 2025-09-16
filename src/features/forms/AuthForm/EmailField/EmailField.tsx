import React, { memo } from 'react';
import cn from 'clsx';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { AuthFormProps } from 'src/features/forms/AuthForm/types';
import { FormItem } from '../../../../shared/form-item/form-item';
import { getValidates } from '../../../../utils/validation';


export type EmailFieldProps = Pick<AuthFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onPressEnter: () => void;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

const EmailField = memo<EmailFieldProps>(
  ({ onChange, onBlur, onPressEnter, autoFocusElement, touched, value, errors, disabled, submitCount }) => {

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        title="Адрес эл. почты"
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          onPressEnter={onPressEnter}
          data-cy="input"
          autoFocus
          type="email"
          name="email"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="user@email.com"
        />
      </FormItem>
    );
  }
);

EmailField.displayName = 'EmailField'

export default EmailField