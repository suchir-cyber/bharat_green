import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
       <div className="navSection">
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder="Search..." size="50" />
        </div>
        <div className="user">
            <div className="user-detail">SignIN/SignUp</div>
            <div className="cart">Cart</div>
        </div>
    </div>
    <div className='subMenu'>
      <ul>
      <Link to='/Rice'>
        <li>Rice</li>
      </Link>
      <Link to='/Dal'>
        <li>Dal</li>
      </Link>
      <Link to='/Spices'>
        <li>Spices</li>
      </Link>
       <li>Ghee</li>
       <li>Tea</li>
       <li>Sugar</li>
       <li>Salt</li>
       <li>Oil</li>
       <li>Dry fruits</li>
      </ul>
    </div>
    </div>
  )
}
