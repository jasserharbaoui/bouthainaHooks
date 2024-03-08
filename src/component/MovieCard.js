// MovieCard.js
import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} style={{height:"200px"}} />
      <div className='titre'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
