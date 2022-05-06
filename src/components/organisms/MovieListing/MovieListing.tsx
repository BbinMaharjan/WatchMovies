import { useSelector } from "react-redux";
import moviesSlice, { getAllMovies } from "../../../redux/movies/moviesSlice";

import MovieCard from "../MovieCard/MovieCard";

import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log("=====", movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {" "}
          {movies.map((movie: any, index: any) => {
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
