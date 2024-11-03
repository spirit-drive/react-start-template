export type LoginFormValues = {
  email?: string;
  password?: string;
};

export type LoginFormErrors = Record<keyof LoginFormValues, string>;
