export type RegisterFormValues = {
  email: string;
  password: string;
};

export type RegisterFormErrors = Record<keyof RegisterFormValues, string>;
