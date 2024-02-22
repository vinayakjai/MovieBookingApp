import { useEffect, useState } from "react";
import { findMovieDetails } from "../../APIS/omdb";
import { useParams } from "react-router-dom";
import MovieCard from "../../COMPONENTS/moviecard/moviecard";

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
      {movieData && (
        <MovieCard
          Title={movieData.Title}
          Year={movieData.Year}
          Type={movieData.Type}
          Poster={movieData.Poster}
        />
      )}
    </>
  );
}

export default MovieDetails;
