import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../../redux/movies/moviesSlice";
import { API_KEY, BASE_URL } from "../../../utilities/api/config";
import MovieListing from "../../organisms/MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    await axios
      .get(`${BASE_URL}/trending/movie/week`, {
        params: { api_key: API_KEY },
      })
      .then((response) => {
        dispatch(getMovies(response.data.result));
        console.log("===>>>>>", response.data.results);
      })
      .catch((error) => {
        console.log("**********", error);
      });
  };

  useEffect(() => {}, []);
  return (
    <div>
      <div className="banner-img"></div>

      <MovieListing />
    </div>
  );
};

export default Home;
