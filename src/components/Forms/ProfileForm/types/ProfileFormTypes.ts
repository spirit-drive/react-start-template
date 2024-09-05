export type ProfileFormValues = {
  name: string;
  about: string;
};

export type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
