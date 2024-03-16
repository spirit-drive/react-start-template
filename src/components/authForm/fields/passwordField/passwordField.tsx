import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
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

export const PasswordField = memo<PasswordFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        title='Пароль'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          data-cy="input"
          autoFocus
          name="password"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder='Пароль'
        />
      </FormItem>
    );
  }
);

PasswordField.displayName = 'PasswordField';