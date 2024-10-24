import { serverUrl, commandToken } from '../../app/constants/Api';

export const getCategories = (pageSize: number, pageNumber: number) => {
  return fetch(
    serverUrl +
      `/categories/?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
      }).toString()}`,
    { headers: { Authorization: `Bearer ${commandToken}` } }
  ).then((response) => response.json());
};
