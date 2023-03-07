import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Space X</h1>
      </div>
      <ul>
        <li>
          <Link to="/"> Rocket </Link>
        </li>
        <li>
          <Link to="mission"> Mission </Link>
        </li>
        <li>
          <Link to="profile"> profile </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar