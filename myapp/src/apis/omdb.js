export function searchMovie(value) {
  return `http://omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&s=${value}`;
}


export function findMovieDetails(movieId){
        return `http://omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&i=${movieId}`
} 