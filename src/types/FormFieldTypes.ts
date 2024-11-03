import { FormikHandlers } from 'formik';
import { FormProps } from './FormTypes';
import { valueType } from 'antd/es/statistic/utils';

export type FormFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  name: string;
  placeholder: string;
  title: string;
};

export type NumberFormFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  onChange: (value: valueType) => void;
  onBlur: FormikHandlers['handleBlur'];
  name: string;
  placeholder: string;
  title: string;
};

type OptionType = {
  value: string;
  label: string;
};

export type SelectFieldProps = Pick<FormProps, 'disabled' | 'autoFocusElement'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: valueType;
  name: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  placeholder: string;
  title: string;
  options: OptionType[];
};

export type optionType = { value: string; label: string };
