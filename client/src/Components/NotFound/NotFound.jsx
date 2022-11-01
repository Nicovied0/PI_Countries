import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found Page</h2>
      <Link to={'/home'}>
      <button>To Home</button></Link>
    </div>
  )
}

export default NotFound