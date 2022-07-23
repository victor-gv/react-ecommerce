import React from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'

const SearchBar = (props) => {
  return (
    <div className="search-form">
    <Form id="searchForm" className="d-flex">
      <FormControl
        id='search'
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={() => props.manageChange()}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </div>
  )
}

export default SearchBar