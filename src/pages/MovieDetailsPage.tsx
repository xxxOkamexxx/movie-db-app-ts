import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMovieDetails } from '../services/TmdbAPI';

import MovieDetails from '../components/MovieDetails';


const MovieDetailsPage = () => {
  const { movie_id } = useParams();
  const { data, isLoading, isError, error } = useQuery(
    ['movie', movie_id],
    () => getMovieDetails(Number(movie_id))
  );

  console.log(data?.title, isLoading, isError, error)

  return (
    <div className='marginTop90'>
      { data && 
        <MovieDetails movie={data}/>
      }
      
    </div>
  )
}

export default MovieDetailsPage
