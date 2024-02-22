import "./home.css";
import MovieCard from "../../COMPONENTS/moviecard/moviecard";
import useMovieList from "../../HOOKS/useMovieLists";
function Home() {
  const { movieList } = useMovieList("avengers", "harry", "batman");
  return (
    <>
      <div className="movie-card-wrapper">
        {movieList.length > 0 ? (
          movieList.map((movie) => {
            return <MovieCard {...movie} key={movie.imdbID}  id={movie.imdbID}/>;
          })
        ) : (
          <p>plz wait</p>
        )}
      </div>
    </>
  );
}

export default Home;
