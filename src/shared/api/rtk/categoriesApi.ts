import { Category, CategoryParams } from '../../../types/CategoryTypes';
import { rtkApi } from './rtkApi';
import { stringifyNestedObjects } from 'src/utils/stringifyNestedObjects';
import { transformErrorResponse } from 'src/utils/transformErrorResponse';
import { Filter, FilterRequest, FilterResponse } from 'src/types/FilterTypes';

const fetchCategoriesParams: FilterRequest = (() => {
  const params: Filter = {
    sorting: {
      type: 'ASC',
      field: 'createdAt',
    },
    pagination: {
      pageNumber: 1,
      pageSize: 100,
    },
  };

  return stringifyNestedObjects(params);
})();

export const categoriesApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchCategories: build.query<Category[], void>({
      query: () => ({
        url: '/categories',
        params: fetchCategoriesParams,
      }),
      providesTags: [{ type: 'Category', id: 'List' }],
      transformErrorResponse,
      transformResponse: (rawResponse: FilterResponse<Category>) =>
        new Promise((resolve) => setTimeout(() => resolve(rawResponse.data), 500)),
    }),
    fetchCategoryById: build.query<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
      }),
      transformErrorResponse,
      providesTags: [{ type: 'Category', id: 'Item' }],
    }),
    createCategory: build.mutation<Category, CategoryParams>({
      query: (body) => ({
        url: '/categories',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Category' }, { type: 'Product' }],
      transformErrorResponse,
    }),
    editCategory: build.mutation<Category, { values: Partial<CategoryParams>; id: string }>({
      query: ({ values, id }) => ({
        url: `/categories/${id}`,
        method: 'PATCH',
        body: values,
      }),
      invalidatesTags: [{ type: 'Category' }, { type: 'Product' }],
      transformErrorResponse,
    }),
    deleteCategory: build.mutation<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      transformErrorResponse,
      invalidatesTags: [{ type: 'Category' }, { type: 'Product' }],
    }),
  }),
});

export const {
  useFetchCategoriesQuery,
  useCreateCategoryMutation,
  useFetchCategoryByIdQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
export const { fetchCategories } = categoriesApi.endpoints;
