import { useRef, useState,useContext } from "react";
import "./navbar.css";
import useMovieList from "../../HOOKS/useMovieLists";
import useDebounce from "../../HOOKS/useDebounce";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon ,faSun} from "@fortawesome/free-solid-svg-icons";
import themeContext from "../../CONTEXT/themeContext";
function Navbar() {
  const resultListRef = useRef(null);
  let navigate = useNavigate();
  const [movieSearch, setMovieSearch] = useState("");
  const [showMovieTitles,setShowMovieTitles]=useState(false)
  const { movieList } = useMovieList(!movieSearch ? "avengers" : movieSearch);
  function handleMovieTitleClick(e, movieId) {
    navigate(`/movie/${movieId}`);
  }
  function updateTheme(){
    if(theme=='dark'){
      setTheme('light')
      localStorage.setItem('theme','light')
    }else{
      setTheme('dark');
      localStorage.setItem('theme','dark')
    }
  }

const {theme,setTheme}=useContext(themeContext)
  return (
    <>
      <div className="navbar-wrapper">
        
          <Link to="/" style={{textDecoration:'none'}}><div style={{color:'white'}}>Movie Base</div></Link>
       
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
             
              setShowMovieTitles(true)
             
              setMovieSearch(e.target.value);
            })}
          />
          <div className="movies-suggestion" ref={resultListRef}>
            {showMovieTitles && movieList.length > 0 &&
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
        <div onClick={updateTheme}>
          
        <FontAwesomeIcon className="theme-icon" icon={theme==='dark'?faSun:faMoon} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
