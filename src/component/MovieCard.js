
import React from 'react';
import { useNavigate } from 'react-router-dom';




const MovieCard = ({movie}) => {

  const navigate = useNavigate();
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} style={{height:"200px"}} />
      <div className='titre'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <button onClick={()=>navigate(`/detail/${movie.id}`)}>see more</button>
      </div>
    </div>
  );
};

export default MovieCard;
