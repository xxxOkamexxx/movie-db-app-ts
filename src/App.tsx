import './assets/scss/App.scss';

import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom';


// Pages
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage';

// Components
import Navbar from './components/Navbar';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
  
  return (
    <div id='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/movie/:movie_id' element={<MovieDetailsPage />} />
      
        
      </Routes>

      <ReactQueryDevtools position='bottom-right' />
    </div>
  )
}

export default App
