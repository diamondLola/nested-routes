import './style.css'
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
      <div className="container">
      <h2 className="logo">
        <Link to={'/'} >Recycleworld</Link>
      </h2>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
        <li><Link to={'/'}>Service</Link></li>
        <li><Link to={'/'}>Blog</Link></li>
        <li><Link to={'/'}>Contact Us</Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
