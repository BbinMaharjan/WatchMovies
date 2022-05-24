import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../../redux/actions/MoviesAction";

import { API_KEY, BASE_URL } from "../../../utilities/api/config";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieListing.scss";
const MovieListing = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const { moviesList, loading } = useSelector(
    ({ MoviesReducers }) => MoviesReducers
  );

  console.log("=====", moviesList);
  const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY },
    });
    setTrendingMovies(response.data.results);
  };
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {" "}
          {trendingMovies.map((movie, index) => {
            return (
              <div className="col-md-2" key={index}>
                <MovieCard key={index} data={movie} />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">renderShows</div>
      </div> */}
    </div>
  );
};

export default MovieListing;
