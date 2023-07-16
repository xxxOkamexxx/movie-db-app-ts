import React from 'react'
import { ICategoryTitle, ICategoryType } from '../interfaces/type'
import { useQuery } from 'react-query';
import { getCategorizedMovies } from '../services/TmdbAPI';
import MovieCardList from './lists/MovieCardList';

interface Props {
  type: ICategoryType;
  title: ICategoryTitle;
}

const CategorizedMovies = ({type, title}:Props) => {
  const { data, isLoading, isError, error } = useQuery(type, () => getCategorizedMovies(type))

  console.log(data, isLoading, isError, error)

  if(isError) {
    if(error instanceof Error) {
      return(
        <p>{error.message}</p>
      ) 
    }else {
      return 
    }
  }

  return (
    <section className='homeContents'>
      <div>
        <h2>{title}</h2>
      </div>
      {isLoading ? <p>Loadimg...</p> : data ? <MovieCardList data={data} /> : null}
    </section>
  )
}

export default CategorizedMovies
