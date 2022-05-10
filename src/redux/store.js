import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import moviesReducer from "./movies/moviesSlice";
// ...

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [thunkMiddleware, logger],
  devTools: process.env.NODE_ENV !== "production",
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
