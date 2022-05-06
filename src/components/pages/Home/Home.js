import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../../redux/movies/moviesSlice";
import MovieListing from "../../organisms/MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
