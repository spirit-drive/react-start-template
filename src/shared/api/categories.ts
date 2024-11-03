import { Category } from 'src/entities/Category/Model/Category';
import { SERVER_URL } from '../../app/constants/api';
import { getToken } from './getToken';

export const fetch_Categories = async (pageSize?: number, pageNumber?: number) => {
  const response = await fetch(
    SERVER_URL +
      `/categories/?${new URLSearchParams({
        pagination: JSON.stringify({
          pageSize: pageSize,
          pageNumber: pageNumber,
        }),
        sorting: JSON.stringify({ type: 'ASC', field: 'id' }),
      }).toString()}`,
    { headers: { Authorization: getToken() } }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0].message.toString());
  }
  const res: Category[] = await response.json();
  return res;
};
