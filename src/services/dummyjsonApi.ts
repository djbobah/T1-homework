import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IUserCart } from "../types/ProductTypes";

interface IProductsQuery {
  query: string;
  limit: number;
  skip: number;
  credentials: string;
}

// Define a service using a base URL and expected endpoints
export const dummyjsonApi = createApi({
  reducerPath: "dummyjsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getUserCart: builder.query<IUserCart, number>({
      query: (id: number) => `carts/user/${id}`,
      transformResponse: (response: { carts: IUserCart[] }) =>
        response.carts[0],
    }),
    getProducts: builder.query<IProduct[], IProductsQuery>({
      // query: ({ query, limit, skip }) =>
      //   `products/search?q=${query}&limit=${limit}&skip=${skip}`,
      query: ({ query, limit, skip, credentials }) => ({
        url: `products/search?q=${query}&limit=${limit}&skip=${skip}`,
        headers: {
          Authorization: `Bearer ${credentials}`,
        },
      }),
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,

      serializeQueryArgs: ({ queryArgs }) => {
        const { query } = queryArgs;
        return query;
      },
      merge: (currentCache, newItems) => {
        const combinedArray = [...currentCache]; // Создаем копию первого массива
        newItems.map((item) => {
          if (!combinedArray.some((arrayItem) => arrayItem.id === item.id)) {
            combinedArray.push(item); // Добавляем элемент из второго массива, если он не найден в первом
          }
        });
        currentCache = combinedArray;
        return currentCache;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      keepUnusedDataFor: 60,
    }),
    getProduct: builder.query<IProduct, { id: number; credentials: string }>({
      query: ({ id, credentials }) => ({
        url: `product/${id}`,
        headers: {
          Authorization: `Bearer ${credentials}`,
        },
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (arg, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        localStorage.setItem("t1", data.token);
      },
    }),
    auth: builder.query({
      query: (credentials) => ({
        url: "auth/me ",
        headers: {
          Authorization: `Bearer ${credentials}`,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUserCartQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useLoginMutation,
  useAuthQuery,
} = dummyjsonApi;
