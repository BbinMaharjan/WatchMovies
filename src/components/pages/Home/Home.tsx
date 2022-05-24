import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../../../redux/actions/MoviesAction";
import MovieListing from "../../organisms/MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
