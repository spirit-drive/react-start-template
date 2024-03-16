import { useMemo } from 'react';
import { Help } from '../../components/forms/formItem/formItem';

export type ValidateStatus = 'error' | '';

const MIN_LENGTH_PASSWORD = 6;

export const getValidateStatus = (errors: unknown, touched: unknown, submitCount: number): ValidateStatus =>
  submitCount && errors && touched ? 'error' : '';

export const getHelp = (errors: unknown, touched: unknown, submitCount: number): Help =>
  submitCount && errors && touched ? (errors as Help) : null;

export type Validates = { validateStatus: ValidateStatus; help: Help };

export const isNotDefinedString = (string?: string): boolean => !string?.trim();

export const getValidates = (
  errors: unknown,
  touched: unknown,
  submitCount: number
): { validateStatus: ValidateStatus; help: Help } => ({
  validateStatus: getValidateStatus(errors, touched, submitCount),
  help: getHelp(errors, touched, submitCount),
});

export const useValidates = (
  errors: unknown,
  touched: unknown,
  submitCount: number
): { validateStatus: ValidateStatus; help: Help } =>
  useMemo(() => getValidates(errors, touched, submitCount), [errors, touched, submitCount]);
