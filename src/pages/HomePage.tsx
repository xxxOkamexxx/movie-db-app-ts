import React from 'react'
import Popular from '../components/homepage/Popular'
import NowPlaying from '../components/homepage/NowPlaying'
import TopRated from '../components/homepage/TopRated'

const HomePage = () => {
  return (
    <div className='main-container'>

      <div className="hero-container">
        <div className="hero">
          Hero
        </div>
      </div>

      <div className="popular-container main-content">
        <div className="popular">
          <Popular />
        </div>
      </div>

      <div className="playing-now-container main-content">
        <div className="playing-now">
          <NowPlaying />
        </div>
      </div>

      <div className="top-rated-container main-content">
        <div className="top-rated">
          <TopRated />
        </div>
      </div>

    </div>
  )
}

export default HomePage
