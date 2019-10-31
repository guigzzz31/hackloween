import React from 'react';
import './MovieDisplay.css'
import {NavLink } from 'react-router-dom';

function MovieDisplay({ movie }) {
  return (
    <div className='container'>
      <div className="card">
        <h1>{movie.title && movie.title.replace(/_/g, " ")}</h1>
        <h2>{movie.year}</h2>
        <img height="480px" width="70%" src={movie.posterUrl} alt={movie.title && movie.title.replace(/_/g, " ")} />
        <p>By {movie.director && movie.director.replace(/_/g, " ")}</p>
        <p>{movie.country && movie.country.replace(/_/g, " ")}</p>
      </div>
      <div>
        <NavLink className="linkMovie" to="/pick">Try again</NavLink>
      </div>
    </div>

  )
}

export default MovieDisplay;
