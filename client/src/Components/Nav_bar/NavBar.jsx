import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <h1>Nav_bar</h1>
      <Link to={'/activities'}></Link>
    </div>
  )
}

export default NavBar