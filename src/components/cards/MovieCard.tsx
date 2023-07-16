import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../../interfaces/type'

interface Props {
  movie: Movie;
}

const MovieCard = ({movie}: Props) => {
  const navigate = useNavigate();
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : null;


  return (
    <>
      <div className='card'>
        <figure>
          {posterUrl ? (
            <img src={posterUrl} alt='' className='img' />
          ):(
            <div>
              <p>No Image</p>
            </div>
          )}
        </figure>
        <div className='cardInfo'>
          <h5 className='cardTitle'>{movie.title}</h5>
          <p className='cardReleaseDate'>{movie.release_date}</p>
        </div>
      </div>
    </>
  )
};

export default MovieCard
