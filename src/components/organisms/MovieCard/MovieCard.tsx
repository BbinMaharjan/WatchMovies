import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../../utilities/api/config";
import "./MovieCard.scss";

const MovieCard = (props: any) => {
  const { data } = props;
  return (
    <>
      <div className="card-item">
        <Link to={`/movie/${data.imdbID}`} />
        <div className="card-inner">
          <div className="card-top">
            <img
              src={`${IMAGE_BASE_URL}${data.poster_path}`}
              alt={data.title || data.name}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title || data.name}</h4>
              <p>Rate : {data.vote_average}</p>
            </div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    </>
  );
};

export default MovieCard;
