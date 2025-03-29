import React from 'react'
import './portfolio2.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
       
    <div id="header">
        <div id="logo"> </div>
        <div id="nav-links">
        <Link to={'/home'} class="nav-link active" aria-current="page" href="#about">home</Link>
          <a href="#about" className="nav-link">About</a>
          <Link to={'/skill'} class="nav-link active" aria-current="page" href="#about">Skills</Link>
          <Link to={'/works'} class="nav-link active" aria-current="page" href="#about">Works</Link>
          <a href="#" className="nav-link">contact</a>
          </div> </div>
    </div>
  )
}

export default Nav
