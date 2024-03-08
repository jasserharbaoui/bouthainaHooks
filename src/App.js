
import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './Filter';
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'BATMAN VS SUPERMAN',
      description: 'Action movies',
      posterURL: 'https://tse1.mm.bing.net/th?id=OIP.2Wm7o9i15YHMmNctZJvdrQHaEo&pid=Api&P=0&h=180',
      rating: 6.5,
    },
    {
      title: 'One Piece ',
      description: 'Cartoon movies',
      posterURL: 'https://tse4.mm.bing.net/th?id=OIP.vuKXVPXylRZ0WNapciKeRQHaEK&pid=Api&P=0&h=180',
      rating: 9.5,
    },
    {
      title: 'THE FIRST SLAM DUNK ',
      description: 'Cartoon movies',
      posterURL: 'https://tse4.mm.bing.net/th?id=OIP.mrX32Lar72_hClSLzW7magHaEK&pid=Api&P=0&h=180',
      rating: 8.5,
    },
    {
      title: 'KIKI is DELIVERY SERVICE  ',
      description: 'Cartoon movies',
      posterURL: 'https://tse4.mm.bing.net/th?id=OIP.gcQZRqedLrKm0rnoFQ4BNgHaEK&pid=Api&P=0&h=180',
      rating: 5.5,
    },
    {
      title: 'IN THIS CORNER OF THE WORLD',
      description: 'Cartoon movies',
      posterURL: 'https://tse2.mm.bing.net/th?id=OIP.OhgQj8uWUPR8Pf4hxZXe1QFNC7&pid=Api&P=0&h=180',
      rating: 6.5,
    },
    {
      title: 'THE BOY AND THE HERON',
      description: 'Cartoon movies',
      posterURL: 'https://tse2.mm.bing.net/th?id=OIP.b3OXMP6NgAIObzivF3ZkOAHaEU&pid=Api&P=0&h=180',
      rating: 4.5,
    },
    
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter(movie =>
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
    setMovies([...movies, newMovie]);
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
      <MovieList movies={filteredMovies} />
     
    </div>
  );
}

export default App;
