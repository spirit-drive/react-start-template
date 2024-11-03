import { LOCAL_STORAGE_TOKEN_KEY } from 'src/app/constants/localStorage';

export const getToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  return token ? `Bearer ${token}` : '';
};
