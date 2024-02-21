import { useRef } from "react";
import "./navbar.css";
function Navbar() {
  const resultListRef = useRef(null);
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
          />
          <div className="movies-suggestion" ref={resultListRef}>
            <span className="movie-result">result 1</span>
            <span className="movie-result">result2</span>
            <span className="movie-result">result3</span>
            <span className="movie-result">result4</span>
          </div>
        </div>
        <div>theme</div>
      </div>
    </>
  );
}

export default Navbar;
