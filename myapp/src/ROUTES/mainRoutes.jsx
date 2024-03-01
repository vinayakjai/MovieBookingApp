import {Routes,Route} from 'react-router-dom'
import Home from '../PAGES/home/home'
import MovieDetails from '../PAGES/movie/moviedetails'
import Error from '../PAGES/error/error'
function MainRoutes(){
    return (
        <>
       
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/movie/:id' element={<MovieDetails />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
        </>
    )
}

export default MainRoutes