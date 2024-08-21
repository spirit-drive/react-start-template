export interface IInput {
    email: string,
    password: string ,
};

export type AuthResult = {
    token: string;
  };