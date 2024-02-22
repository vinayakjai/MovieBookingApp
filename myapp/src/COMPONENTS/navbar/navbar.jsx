import { useRef, useState } from "react";
import "./navbar.css";
import useMovieList from "../../HOOKS/useMovieLists";
import useDebounce from "../../HOOKS/useDebounce";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const resultListRef = useRef(null);
  let navigate = useNavigate();
  const [movieSearch, setMovieSearch] = useState("");
  const { movieList } = useMovieList(!movieSearch ? "avengers" : movieSearch);
  function handleMovieTitleClick(e, movieId) {
    navigate(`/movie/${movieId}`);
  }
  return (
    <>
      <div className="navbar-wrapper">
        <div
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
         
          <Link to="/">Movie Base</Link>
        </div>
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
                  <div
                    className="movie-result"
                    onMouseDown={(e) => handleMovieTitleClick(e, movie.imdbID)}
                    key={movie.imdbID}
                  >
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
