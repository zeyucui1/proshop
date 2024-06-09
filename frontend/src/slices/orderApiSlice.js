import { apiSlice } from './apislice'
import { ORDERS_URL } from '../constants'

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}`,
        method: 'POST',
        body: order,
      }),
    }),
    getOrderById: builder.query({
      query: (id) => `${ORDERS_URL}/${id}`,
    }),
    getMyOrders: builder.query({
      query: () => `${ORDERS_URL}/mine`,
    }),
    getOrders: builder.query({
      query: () => ORDERS_URL,
    }),
    updateOrderToDelivered: builder.mutation({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}/deliver`,
        method: 'PUT',
      }),
    }),
    updateOrderToPaid: builder.mutation({
      query: (id, paymentResult) => ({
        url: `${ORDERS_URL}/${id}/pay`,
        method: 'PUT',
        body: paymentResult,
      }),
    }),
  }),
})

export const {
  useCreateOrderMutation,
  useGetOrderByIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useUpdateOrderToDeliveredMutation,
  useUpdateOrderToPaidMutation,
} = orderApiSlice
