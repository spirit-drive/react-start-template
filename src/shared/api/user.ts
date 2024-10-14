import { serverUrl, commandId } from '../../app/constants/Api';

export type Credential = {
  email: string;
  password: string;
};

//register user
export const signup = async ({ email, password }: Credential) => {
  const data = JSON.stringify({ email, password, commandId });
  console.log('try register', data);
  const response = await fetch(serverUrl + `/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  if (!response.ok) {
    const errorData = await response.json();
    console.log('register errors', errorData.errors[0]);
    throw new Error(errorData.errors[0].message.toString());
  }
  return await response.json();
};

//get user
export const getProfile = (token: string) => {
  return fetch(serverUrl + `/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((response) => response.json());
};
