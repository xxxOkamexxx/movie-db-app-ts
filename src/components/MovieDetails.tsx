import React from 'react'
import { Movie } from '../interfaces/type';

interface Props {
  movie: Movie;
}

const MovieDetails = ({movie}: Props) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : null;
  return (
    <>
      <h2>{movie.title}</h2>
      { posterUrl &&
        <img src={posterUrl} alt={`image of ${movie.title}`} />
      }
    </>
  )
}

export default MovieDetails
