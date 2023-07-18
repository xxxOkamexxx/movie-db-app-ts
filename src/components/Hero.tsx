import React from 'react'
import SearchForm from './form/SearchForm'


const Hero = () => {


  return (
    <div className='heroContainer'>
      <div className='heroHeagingContainer'>

        <div className='heroHeaging'>
          <h1>
            Welcome!
          </h1>
          <h3>
            Millions of movies, TV shows and people to discover. <br/>Explore now.
          </h3>
        
        </div>
      </div>

      <div className='searchContainer'>
        {/* Search bar */}
        <SearchForm />
      </div>

    </div>  
  )
}

export default Hero
