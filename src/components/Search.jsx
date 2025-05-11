import React from 'react'
import search from '../assets/search.svg';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'>
      <div style={{}}>
        <img src={search} alt="search" />

        <input
          type="text"
          placeholder='Search for a movie'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Search