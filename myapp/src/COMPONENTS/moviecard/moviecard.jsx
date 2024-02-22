import { Link, useNavigate } from "react-router-dom";
import "./moviecard.css";
function MovieCard({ Title, Year, Type, Poster,id }) {

  let navigate=useNavigate();

  function handleMovieCardClick(){
      navigate(`/movie/${id}`)
  }
  return (
    
      <div className="movie-wrapper" onClick={handleMovieCardClick}>
        <div className="movie-image">
          <img src={Poster} />
        </div>
        <div className="movie-title">
          <span>{Title}</span>
        </div>
        <div className="movie-year">
          <span>Released in: {Year}</span>
        </div>
        <div className="movie-type">
          <span>Type :{Type}</span>
        </div>
      </div>
   
  );
}

export default MovieCard;
