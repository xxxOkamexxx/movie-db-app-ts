import './assets/scss/App.scss';

import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom';

import getNowPlayingMovies from "./services/TmdbAPI"

// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';

// Components


function App() {
  
  return (
    <div id='App'>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      
        
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  )
}

export default App
