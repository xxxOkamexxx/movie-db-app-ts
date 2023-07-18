import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchForm = () => {
  return (
    <form className='searchFormContainer'>
      <div className='searchForm'>
        <div className='searchIcon'>
          <SearchIcon />
        </div>
        <input type="text" placeholder='Search' />      
      </div>
    </form>
  )
}

export default SearchForm
