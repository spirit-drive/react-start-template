import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BACK_URI } from '../AuthService/AuthConfig'
import { RtkState } from 'src/store/store'
import { Product } from 'src/models/product/product'
import { Products } from 'src/models/product/productResponse'
import { PageRequest } from 'src/models/requests/PageRequest'
import { ProductUpdateModel } from 'src/models/product/updateProduct'
import { ProductAddModel } from 'src/models/product/addProduct'


export const productApi = createApi({
    reducerPath: 'prod',
    baseQuery: fetchBaseQuery({
        baseUrl: BACK_URI,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RtkState).token

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        rtkGetProduct: builder.mutation<Product, string>({
            query: (id: string) => `/products/${id}`,
        }),
        rtkCreateProduct: builder.mutation<Product, ProductAddModel>({
            query: (product: ProductAddModel) => ({
                url: '/products/',
                method: 'POST',
                body: product,
            }),
        }),
        rtkGetProducts: builder.mutation<Products, PageRequest>({
            query: (request: PageRequest) => {
                return {
                    url: '/products',
                    params: {
                        pagination: JSON.stringify(request.pagination),
                        sorting: JSON.stringify(request.sorting)
                    }
                }
            },
        }),
        rtkUpdateProduct: builder.mutation<Product, ProductUpdateModel>({
            query: (product: ProductUpdateModel) => ({
                url: `/products/${product.id}`,
                method: 'PATCH',
                body: product,
            }),
        }),
    })

});

export const { useRtkGetProductMutation, useRtkCreateProductMutation, useRtkUpdateProductMutation, useRtkGetProductsMutation } = productApi;