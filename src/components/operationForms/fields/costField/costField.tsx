import React, { memo } from 'react';
import { Input } from 'antd';
import { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { getValidates } from '../../../forms/validation';
import { FormItem } from '../../../forms/formItem/formItem';
import { OperationFormProps } from '../../types';

export type CostFieldProps = Pick<OperationFormProps, 'className' | 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: number;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

export const CostField = memo<CostFieldProps>(
  ({ className, onChange, onBlur, autoFocusElement, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        title='Стоимость'
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input
          disabled={disabled}
          ref={autoFocusElement}
          data-cy="input"
          autoFocus
          name="cost"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          type="number"
          placeholder='Стоимость'
        />
      </FormItem>
    );
  }
);

CostField.displayName = 'CostField';