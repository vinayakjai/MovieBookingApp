import { useEffect, useState } from "react";
import { searchMovie } from "../APIS/omdb";
import axios from "axios";

function useMovieList(...movies){
    const [movieList,setMovieList]=useState([])
    async function downloadInitialMovies(...movieNames){
    
       try{
        const urls=movieNames.map((movieName)=>{
            return (
                searchMovie(movieName)
            )
        })
       
        const response=await axios.all(urls.map(url=>axios.get(url)));
    
        if(response[0].data.Error){
           setMovieList([])
        }else{
            const movies=response.map(movieResponse=>movieResponse.data.Search)
        
            setMovieList([].concat(...movies));
        }
    

       }catch(err){
            console.log('api request failed',err)
       }
     }
     useEffect(()=>{
         downloadInitialMovies(...movies)
     },[...movies])

     return {movieList}
}

export default useMovieList;