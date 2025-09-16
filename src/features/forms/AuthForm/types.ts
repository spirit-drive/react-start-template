import { FormProps } from 'src/features/forms/types';
import { AuthData } from 'src/models/auth';

export type AuthFormValues = AuthData;

export type AuthFormErrors = Record<keyof AuthFormValues, string>;
export type AuthFormTouched = Record<keyof AuthFormValues, boolean>;

export type AuthFormProps = FormProps<AuthFormValues>;
