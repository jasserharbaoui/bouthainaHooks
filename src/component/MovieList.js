
import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({ MoviesData }) => {
  console.log(MoviesData);
  return (
    <div className="movie-list">

       {MoviesData.map(movie => (
       <MovieCard key={movie.id} movie={movie} /> 

      //   <Filter setFilter={setFilter} />
      //   {filteredMovies.map(movie => (
      //  <MovieCard key={movie.id} movie={movie} />

      ))} 
       {/* <MovieCard/>  */}
    </div>
  );
};

export default MovieList;
