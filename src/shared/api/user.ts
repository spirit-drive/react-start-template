import {serverUrl, commandToken } from '../../app/constants/Api';

//get user
export const getProfile = (token: string) => {
  return fetch(serverUrl + `/profile`, {
    headers: { Authorization: `Bearer ${commandToken}` },
  }).then((response) => response.json());
};
