import axios from 'axios';
import { SERVER_URL } from 'src/app/constants/api';
import { getToken } from './getToken';

export const $api = axios.create({
  baseURL: SERVER_URL,
  headers: {
    authorization: getToken(),
  },
});
