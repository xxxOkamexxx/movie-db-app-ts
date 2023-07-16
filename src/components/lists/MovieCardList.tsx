import React from "react" 
import MovieCard from "../cards/MovieCard"
import { Movies } from "../../interfaces/type"

interface Props {
  data: Movies
}

const MovieCardList = ({data}: Props) => {
  console.log(data)

  return (
    <div className="listContainer">
        {data?.results?.map((result, i) => (
          <MovieCard movie={result} key={i} />
        ))}
    </div>
  )
}

export default MovieCardList
