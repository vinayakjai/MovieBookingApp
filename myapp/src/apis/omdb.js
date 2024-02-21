export function searchMovie(value) {
  return `http://omdbapi.com/?apikey=${
    import.meta.env.VITE_API_KEY
  }&s=${value}`;
}
