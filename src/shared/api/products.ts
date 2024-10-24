import { serverUrl, commandToken } from '../../app/constants/Api';

export const getProducts = (pageSize: number, pageNumber: number) => {
  console.log(serverUrl, commandToken)
  return fetch(
    serverUrl +
      `/products?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'DESC', field: 'createdAt' }),
      }).toString()}`,
    { headers: { Authorization: `Bearer ${commandToken}` } }
  ).then((response) => response.json());
};
