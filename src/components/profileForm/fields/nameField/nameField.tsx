import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types.d';
import { UserOutlined } from '@ant-design/icons';
import { FormItem } from '../../../forms/formItem/formItem';
import { getValidates } from '../../../forms/validation';
import { ProfileFormProps } from '../../types';

export type NameFieldProps = Pick<ProfileFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const NameField = memo<NameFieldProps>(
  ({ onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title="Имя" required validateStatus={validateStatus} help={help}>
        <Input
          prefix={prefix}
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="name"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="Имя"
        />
      </FormItem>
    );
  }
);

NameField.displayName = 'NameField';
