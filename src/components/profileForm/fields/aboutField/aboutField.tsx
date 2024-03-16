import React, { memo } from 'react';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types.d';
import { FormItem } from '../../../forms/formItem/formItem';
import { getValidates } from '../../../forms/validation';
import { ProfileFormProps } from '../../types';

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const AboutField = memo<AboutFieldProps>(
  ({ onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem title="О себе" validateStatus={validateStatus} help={help}>
        <Input.TextArea
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder="О себе"
        />
      </FormItem>
    );
  }
);

AboutField.displayName = 'AboutField';
