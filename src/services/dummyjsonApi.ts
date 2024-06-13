import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct, ISearch } from "../types/ProductTypes";

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
    getUserCart: builder.query<ISearch, number>({
      query: (id: number) => `carts/user/${id}`,
    }),
    getProducts: builder.query<IProduct[], IProductQuery>({
      query: ({ query, limit, skip }) => ({
        url: `products/search?q=${query}&limit=${limit}&skip=${skip}`,
      }),
      transformResponse: (response: { products: IProduct[] }) =>
        response.products,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserCartQuery, useGetProductsQuery } = dummyjsonApi;
