import React from 'react'
import { FormControl } from 'react-bootstrap'
import useSearch from '../../Hooks/useSearch'

const SearchBar = (props) => {
  const { filter } = useSearch();
  return (
    <div className="search-form">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        value={filter}
        aria-label="Search"
        onChange={props.manageChange}
      />
  </div>
  )
}

export default SearchBar