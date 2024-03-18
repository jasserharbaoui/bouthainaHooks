
import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './Filter';
import Deatails from './movieDetails';
import { filmList} from './component/moviesData';
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [MoviesData, setMoviesData] = useState(filmList);


  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = MoviesData.filter(movie =>
    movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    movie.rating >= ratingFilter
  );

  const handleTitleChange = (title) => {
    setTitleFilter(title);
  };

  const handleRatingChange = (rating) => {
    setRatingFilter(rating);
  };

  const addMovie = (newMovie) => {
    setMoviesData([...MoviesData, newMovie]);
  };

  

  return (
    <div className="App">
        <h1> MY BEST MOUVIS</h1>
      <div className='button'>
       <button onClick={() => addMovie({ title: 'New Movie', description: 'Cartoon', posterURL: 'https://tse2.mm.bing.net/th?id=OIP.aft8qp31nTWrcFJ8i9HlqwHaEK&pid=Api&P=0&h=180', rating: 7.0 })}>
        Add New Movie
      </button>
      </div>
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      

      <Routes>
       
        <Route path="/Detail/:id" element={<Deatails film= {MoviesData}/>}/>
         <Route path='/' element={<MovieList MoviesData={filteredMovies} />}/>

      </Routes>

    
      
    </div>
  );
}

export default App;
