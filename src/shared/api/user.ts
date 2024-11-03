import { SERVER_URL, COMMAND_ID } from '../../app/constants/api';
import { getToken } from './getToken';

export type Credential = {
  email: string;
  password: string;
};

export const sign_up = async ({ email, password }: Credential) => {
  const response = await fetch(SERVER_URL + `/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, commandId: COMMAND_ID }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message.toString());
  }

  return await response.json();
};

export const sign_in = async ({ email, password }: Credential) => {
  const response = await fetch(SERVER_URL + `/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    body: JSON.stringify({ email, password, commandId: COMMAND_ID }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message.toString());
  }

  return await response.json();
};

//get user
export const getProfile = (token: string) => {
  return fetch(SERVER_URL + `/profile`, {
    headers: { Authorization: getToken() },
  }).then((response) => response.json());
};
