import { AxiosResponse } from "axios";
import axiosInstance from "../../../shared/axiosHelper/axiosHelper";
import { Sorting, TCategoryRaw } from "../../ViewProductList/model/types/types"

export const getCategoriesApi = async (pageSize: number, pageNumber: number, sorting: Sorting): Promise<TCategoryRaw> => {

  const url = `/categories? ${new URLSearchParams({
    pagination: JSON.stringify({
      pageSize,
      pageNumber,
    }),
    sorting: JSON.stringify(sorting),
  }).toString()}`

  const response = await axiosInstance.get<TCategoryRaw>(url);
  return response.data;
}



export const postCategoriesApi = async (name: string) => {
  const response = await axiosInstance.post<TCategoryRaw>('/categories', {name});
}

export const deleteCategoryApi = async (id: string) => {
  const response = await axiosInstance.delete(`/categories/${id}`);
}

