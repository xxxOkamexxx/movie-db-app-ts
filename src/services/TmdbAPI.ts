/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios"

// Interfaces
import {
  ICategoryType,
  Movie,
  Movies,
  Cast,
  People,
  Genres
} from '../interfaces/type'


// Defaults and variables
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY as string;


// get movie type of [popular, now_playing, top_rated] 
export const getCategorizedMovies = async (
  type: ICategoryType
): Promise<Movies> => {
  const res = await axios.get(
    `/movie/${type}?api_key=${API_KEY}&region=us&language=en-US&include_adult=false`
  );
  return res.data as Movies
};

export const getMovieDetails = async (
  id: number
): Promise<Movie> => {
  const res = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&append_to_response=credits&include_adult=false`
  );
  return res.data as Movie
}




export default {
  getCategorizedMovies,
  getMovieDetails,
}