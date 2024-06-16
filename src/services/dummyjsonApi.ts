import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, IUserCart } from "../types/ProductTypes";

interface IProductQuery {
  query: string;
  limit: number;
  skip: number;
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
    getProducts: builder.query<IProduct[], IProductQuery>({
      // query: ({ query, limit, skip }) =>
      //   `products/search?q=${query}&limit=${limit}&skip=${skip}`,
      query: ({ query, limit, skip }) => ({
        url: `products/search?q=${query}&limit=${limit}&skip=${skip}`,
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
    getProduct: builder.query<IProduct, number>({
      query: (id: number) => `product/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserCartQuery, useGetProductsQuery, useGetProductQuery } =
  dummyjsonApi;
