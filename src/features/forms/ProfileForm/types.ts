import { FormProps } from 'src/features/forms/types';
import { Profile } from 'src/models/profile';

export type ProfileFormValues = Profile;

export type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
export type ProfileFormTouched = Record<keyof ProfileFormValues, boolean>;

export type ProfileFormProps = FormProps<ProfileFormValues>;
