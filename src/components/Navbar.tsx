import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import Logo from './Logo';

const Navbar = () => {

  return (
    <header>
      <div className='navContainer'>
        <div className="wrapper wContainer">

          <div className="nav">
            {/* <span className="logo">TMDB</span> */}
            <Logo />

            <ul>
              <li>Movies</li>
              <li>People</li>
            </ul>

          </div>

          <div className="flex">
            <button className="navBtn"><SearchIcon sx={{color:'white'}}/></button>
          </div>

        </div>        
      </div>
    </header>
  )
}

export default Navbar
