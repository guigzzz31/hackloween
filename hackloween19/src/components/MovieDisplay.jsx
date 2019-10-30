import React from 'react';
import './MovieDisplay.css'

function MovieDisplay({ movie }) {
  return (
    <div className="container">
      <div className="card">
        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.year}</h2>
        </div>
        <img width="100%" src={movie.posterUrl} alt={movie.title} />
        <div>
          <p>Directed by: {movie.director}</p>
          <p>{movie.country}</p>
          <a href="#">Another Link</a>
        </div>
      </div>
    </div>
  )
}



export default MovieDisplay;