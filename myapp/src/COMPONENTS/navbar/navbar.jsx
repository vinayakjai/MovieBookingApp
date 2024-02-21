import { useRef, useState } from "react";
import "./navbar.css";
import useMovieList from "../../HOOKS/useMovieLists";
import useDebounce from "../../HOOKS/useDebounce";
function Navbar() {
  const resultListRef = useRef(null);

  const [movieSearch, setMovieSearch] = useState("");
  const { movieList } = useMovieList(!movieSearch ? "avengers" : movieSearch);
  return (
    <>
      <div className="navbar-wrapper">
        <div>Movie Base</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="search your movie here"
            id="movie-search-input"
            onFocus={() => {
              resultListRef.current.style.display = "block";
            }}
            onBlur={() => {
              resultListRef.current.style.display = "none";
            }}
            onChange={useDebounce((e) => {
              setMovieSearch(e.target.value);
            })}
          />
          <div className="movies-suggestion" ref={resultListRef}>
            {movieList.length > 0 &&
              movieList.map((movie) => {
                return (
                  <div className="movie-result" key={movie.imdbID}>
                    {movie.Title}
                  </div>
                );
              })}
          </div>
        </div>
        <div>theme</div>
      </div>
    </>
  );
}

export default Navbar;
