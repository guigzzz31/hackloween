import React from 'react';
import './MovieDisplay.css'

function MovieDisplay({ movie }) {
  return (
    <div className="card">
      <h1>{movie.title && movie.title.replace(/_/g, " ")}</h1>
      <h2>{movie.year}</h2>
      <img width="100%" src={movie.posterUrl} alt={movie.title && movie.title.replace(/_/g, " ")} />
      <p>By {movie.director && movie.director.replace(/_/g, " ")}</p>
      <p>{movie.country && movie.country.replace(/_/g, " ")}</p>
      <a href="#">Another Link</a>
    </div>
  )
}



export default MovieDisplay;