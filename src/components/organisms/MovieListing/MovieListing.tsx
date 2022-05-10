import { useSelector } from "react-redux";
import { getAllMovies } from "../../../redux/movies/moviesSlice";

import MovieCard from "../MovieCard/MovieCard";

import "./MovieListing.scss";
const MovieListing = () => {
  const dataMovies: any = useSelector(getAllMovies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {/* {dataMovies.map((movie: any, index: any) => (
            <MovieCard key={index} data={movie} />
          ))} */}
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
