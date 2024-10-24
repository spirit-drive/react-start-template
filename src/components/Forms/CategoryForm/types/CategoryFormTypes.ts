export type CategoryFormValues = {
  name: string;
};

export type CategoryFormErrors = Record<keyof CategoryFormValues, string>;
