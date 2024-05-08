import { FormProps } from '../forms/types';

export type OperationFormValues = {
  name: string;
  cost: number;
  category?: string;
  description: string;
};

export type OperationFormErrors = Record<keyof OperationFormValues, string>;
export type OperationFormTouched = Record<keyof OperationFormValues, boolean>;

export type OperationFormProps = FormProps<OperationFormValues>;


