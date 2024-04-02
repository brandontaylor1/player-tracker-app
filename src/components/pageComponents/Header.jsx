import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbrand'>
          <img sr='#' alt='logo' />
          <h1>Player Tracker</h1>
        </div>
        <div>
          <NavLink to='/homepage' activeClassName='active'>Home</NavLink>
          <NavLink to='/teams' activeClassName='active'>Teams</NavLink>
          <NavLink to='/players' activeClassName='active'>Players</NavLink>
        </div>
      </nav>    
    </header>
  )
}

export default Header
