import React from 'react'
import '../styles/nav.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAddressCard, faHome, faUserNinja, faBarsProgress} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div id="mySidenav" className='sidenav'>
    <Link to="/" id="about"><FontAwesomeIcon icon={faHome}/> Home</Link>
    <Link to="/about" id="blog"><FontAwesomeIcon icon={faUserNinja} /> About</Link>
    <Link to="/projects" id="projects"><FontAwesomeIcon icon={faBarsProgress}/> Projects</Link>
    <Link to='/contact' id="contact"><FontAwesomeIcon icon={faAddressCard} /> Contact</Link>
  </div>
  
  )
}

export default Nav