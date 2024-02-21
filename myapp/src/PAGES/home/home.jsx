import { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
import { searchMovie } from '../../apis/omdb';
import MovieCard from '../../COMPONENTS/moviecard/moviecard';
function Home(){
    const [movieList,setMovieList]=useState([])
   async function downloadInitialMovies(...movieNames){
   
    const urls=movieNames.map((movieName)=>{
        return (
            searchMovie(movieName)
        )
    })
   
    const response=await axios.all(urls.map(url=>axios.get(url)));

    const movies=response.map(movieResponse=>movieResponse.data.Search)
    
    setMovieList([].concat(...movies));

    }
    useEffect(()=>{
        downloadInitialMovies('avengers','harry','batman')
    },[])
    return (
        <>
        <div className="movie-card-wrapper">
            {
               movieList.length>0 ? (
                movieList.map((movie)=>{
                    return (
                        <MovieCard {...movie} key={movie.imdbID} />
                    )
                })
               ):<p>some error occurred</p>
            }
        </div>
        </>

    )
}

export default Home;