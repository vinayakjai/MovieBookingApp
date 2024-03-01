import { useEffect, useState } from "react";
import { findMovieDetails } from "../../APIS/omdb";
import { useParams } from "react-router-dom";
import MovieCard from "../../COMPONENTS/moviecard/moviecard";
//import { Rating } from '@smastrom/react-rating'

//import '@smastrom/react-rating/style.css';
import './moviedetails.css'
function MovieDetails() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  async function downloadMovieDetails(movieId) {
    const response = await fetch(findMovieDetails(movieId));
    const movieDetails = await response.json();
    setMovieData(movieDetails);
  }
  useEffect(() => {
    downloadMovieDetails(id);
  }, [id]);

  return (
    <>
      <div className="movie-details-wrapper">
      
          {movieData && (
            <MovieCard
              Title={movieData.Title}
              Year={movieData.Year}
              Type={movieData.Type}
              Poster={movieData.Poster}
              id={movieData.imdbID}
            />
          )}
       
        {
          movieData && (
            <div className="movie-details">
                <div>
                  Plot : {movieData.Plot}
                </div>
                <div>
                  Actors : {movieData.Actors}
                </div>
                <div>
                  Genre : {movieData.Genre.split(',').map((genre)=>{
                    return (
                    <span key={genre}>  {genre} </span>
                    )
                  })}
                </div>
                
            </div>  
          )
      
        }
        
      </div>
    </>
  );
}

export default MovieDetails;
