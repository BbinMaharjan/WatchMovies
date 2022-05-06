import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from "../store";

const initialState = {
  movies: {},
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { getMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
