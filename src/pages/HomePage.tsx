import CategorizedMovies from "../components/CategorizedMovies"
import Hero from "../components/Hero"
import Logo from "../components/Logo"

import { ICategoryTitle, ICategoryType } from "../interfaces/type"

const HomePage = () => {
  console.log()
  return (
    <div className='main-container wContainer'>
      <Hero />
      
      <CategorizedMovies 
        type={ICategoryType.now_playing} 
        title={ICategoryTitle.now_playing}
      />
      <CategorizedMovies 
        type={ICategoryType.popular} 
        title={ICategoryTitle.popular}
      />
      <CategorizedMovies 
        type={ICategoryType.top_rated} 
        title={ICategoryTitle.top_rated}
      />

    
    </div>
  )
}

export default HomePage
