import { rtkApi } from './rtkApi';
import { stringifyNestedObjects } from 'src/utils/stringifyNestedObjects';
import { transformErrorResponse } from 'src/utils/transformErrorResponse';
import { FilterResponse } from 'src/types/FilterTypes';
import { ProductsFilters, ProductParams, Product } from '../../../types/ProductTypes';

export const productApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProducts: build.query<FilterResponse<Product>, ProductsFilters>({
      query: (values) => {
        return {
          url: '/products',
          params: stringifyNestedObjects(values),
        };
      },
      providesTags: [{ type: 'Product', id: 'List' }],
      transformResponse: (resp: FilterResponse<Product>) =>
        new Promise((resolve) => setTimeout(() => resolve(resp), 500)),
      transformErrorResponse,
    }),
    fetchProductById: build.query<Product, string>({
      query: (id) => ({ url: `products/${id}` }),
      transformErrorResponse,
      providesTags: [{ type: 'Product', id: 'Item' }],
    }),
    createUpdateProduct: build.mutation<Product, { values: ProductParams; id?: string }>({
      query: ({ values, id }) => ({
        url: id ? `/products/${id}` : '/products',
        method: id ? 'PUT' : 'POST',
        body: values,
      }),
      invalidatesTags: ['Product'],
      transformErrorResponse,
    }),
    deleteProduct: build.mutation<Product, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart', 'Product'],
      transformErrorResponse,
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useFetchProductByIdQuery,
  useCreateUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
export const { fetchProducts, createUpdateProduct, deleteProduct } = productApi.endpoints;
