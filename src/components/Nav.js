import React from 'react'
import '../styles/nav.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div id="mySidenav" className='sidenav'>
    <Link to="/about" id="about">About</Link>
    <Link to="/" id="blog">Blog</Link>
    <Link to="/projects" id="projects">Projects</Link>
    <Link to='/contact' id="contact">Contact</Link>
  </div>
  
  )
}

export default Nav