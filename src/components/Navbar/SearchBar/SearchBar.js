import React from 'react'
import { FormControl } from 'react-bootstrap'

const SearchBar = (props) => {
  return (
    <div className="search-form">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={props.manageChange}
      />
  </div>
  )
}

export default SearchBar