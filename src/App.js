

import { useEffect, useState } from 'react'
import './App.css'



import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

const getMovieRequest = async (searchValue)=> {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fbea3bb`
  const response = await fetch(url);
  const responseJson = await response.json();
  
  if(responseJson.Search) {
    setMovies(responseJson.Search)

  }
}
// We're updating the useEffect hook to run whenever the searchValue changes
useEffect(()=> {
  getMovieRequest(searchValue);
},[searchValue])


  return (
   <div className='container'>
    <div className='navbar'>
   <MovieListHeading heading='Movie Search' />
   <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    
    <div className="movieWrapper">

   <MovieList movies={movies}  />
    </div>
    
   </div>
  )
}

export default App
