import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACK_URI } from "../AuthService/AuthConfig";
import { RtkState } from "src/store/store";
import { PageRequest } from "src/models/requests/PageRequest";
import { OrderResponse } from "src/models/order/orderResponse";
import { Order } from "src/models/order/order";
import { OrderAddModel } from "src/models/order/addOrder";
import { OrderUpdateModel } from "src/models/order/updateOrder";

export const orderApi = createApi({
    reducerPath: 'order',
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
        rtkGetOrder: builder.mutation<Order, string>({
            query: (id: string) => `/orders/${id}`,
        }),
        rtkCreateOrder: builder.mutation<Order, OrderAddModel>({
            query: (order: OrderAddModel) => ({
                url: '/orders/',
                method: 'POST',
                body: order,
            }),
        }),
        rtkGetOrders: builder.mutation<OrderResponse, PageRequest>({
            query: (request: PageRequest) => {
                return {
                    url: '/orders',
                    params: {
                        pagination: JSON.stringify(request.pagination),
                        sorting: JSON.stringify(request.sorting)
                    }
                }
            },
        }),
        rtkUpdateProduct: builder.mutation<Order, OrderUpdateModel>({
            query: (order: OrderUpdateModel) => ({
                url: `/orders/${order.id}`,
                method: 'PATCH',
                body: order,
            }),
        }),
        rtkDeleteProduct: builder.mutation<Order, string>({
            query: (id: string) => ({
                url: `/orders/${id}`,
                method: 'DELETE'
            }),
        }),
    })

});

export const { useRtkGetOrderMutation, useRtkCreateOrderMutation, useRtkGetOrdersMutation, useRtkUpdateProductMutation, useRtkDeleteProductMutation } = orderApi;