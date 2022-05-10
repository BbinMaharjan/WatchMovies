import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utilities/api/config";

// using redux thunk middleware
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
    // .then((response) => {
    //   console.log(response);
    //   // console.log("===>>>>>", response.data.results);
    // })
    // .catch((error) => {
    //   console.log("**********", error);
    // });
  }
);
export const fetchAsyncMoviesDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
    // .then((response) => {
    //   // console.log("===>>>>>", response.data.results);
    // })
    // .catch((error) => {
    //   console.log("**********", error);
    // });
  }
);

const initialState = {
  movies: {},
  selectMovies: {},
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectMovies = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Done");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMoviesDetail.fulfilled]: (state, { payload }) => {
      console.log("Successfully");
      return { ...state, selectMovies: payload };
    },
  },
});

export const { removeSelectedMovie } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectMovies;
export default moviesSlice.reducer;
