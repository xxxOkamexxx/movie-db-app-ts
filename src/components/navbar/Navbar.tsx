import React from 'react'
import Searchbar from '../navbar/Searchbar'
import Menu from '../navbar/Menu'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      {/* nav-section 1 */}
      <div className='nav-section w-40 nav-menu'>
        <Menu />
      </div>
      
      {/* nav-section 2 */}
      <div className='nav-section w-20'>
        <h1 className='m-auto'>
          Logo
        </h1>
      </div>
      
      {/* nav-section 3 */}
      <div className='nav-section w-40 nav-search'>
        <Searchbar />
      </div>
    </div>
  )
}

export default Navbar
