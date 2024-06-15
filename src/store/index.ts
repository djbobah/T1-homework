import { configureStore } from "@reduxjs/toolkit";
import { dummyjsonApi } from "../services/dummyjsonApi";
import cartSlice from "./cartSlice";

// import Words from "./Words.ts";

const store = configureStore({
  reducer: {
    [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
    cart: cartSlice.reducer,
    // words: Words,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyjsonApi.middleware),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
