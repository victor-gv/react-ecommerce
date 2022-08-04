import React from 'react'
import { Link } from 'react-router-dom'


const PrivateArea = () => {

  return (
    <>
    <div>PrivateArea</div>
    <Link to="/private/logout">Logout</Link>
    </>
  )


}

export default PrivateArea