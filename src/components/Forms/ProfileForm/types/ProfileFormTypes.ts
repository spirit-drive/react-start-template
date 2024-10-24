export type ProfileFormValues = {
  name: string;
};

export type ProfileFormErrors = Record<keyof ProfileFormValues, string>;
