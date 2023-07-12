import './assets/scss/App.scss';

import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';
import PopularMoviePage from './pages/PopularMoviePage';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage';
import NowPlayingMoviePage from './pages/NowPlayingMoviePage';
import GenrePage from './pages/GenrePage';
import MoviePage from './pages/MoviePage';
import ActorPage from './pages/ActorPage';
import MovieByActorPage from './pages/MovieByActorPage';

// Components
import Navbar from './components/navbar/Navbar';


function App() {
  

  return (
    <div id='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/popular' element={<PopularMoviePage />} />
        <Route path='/top_rated' element={<TopRatedMoviesPage />} />
        <Route path='/now_playing' element={<NowPlayingMoviePage />} />
        <Route path='genres/:genre_id' element={<GenrePage />} />
        <Route path='/movie/:movie_id' element={<MoviePage />} />
        <Route path='/actor/:actor_id' element={<ActorPage />} />
        <Route path='/actor/:actor_id' element={<MovieByActorPage />} />
        
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  )
}

export default App
