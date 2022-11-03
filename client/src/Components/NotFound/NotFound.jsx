import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Nav_bar/NavBar'

const NotFound = () => {
  return (
    <div>
      <NavBar/>
      <h2>Not Found Page</h2>
      <Link to={'/home'}>
      <button>To Home</button></Link>
    </div>
  )
}

export default NotFound