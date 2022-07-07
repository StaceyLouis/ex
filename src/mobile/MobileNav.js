import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from 'react-sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAddressCard, faHome, faUserNinja, faBarsProgress, faBars,faFileDownload} from '@fortawesome/free-solid-svg-icons'


const Div = styled.div`
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: space-evenly;
  align-content: space-evenly;
  font-size: 2rem;
  margin-top: 10rem;
  padding: 1rem;

  a{
    text-decoration: none;
    padding: 1rem;
  }

`
const Button = styled.button`
    display: block;
    background-color: var(--bg);
    padding: 0.4rem;
    font-size: 1.5rem;
    margin-top: 8rem;
    color: #fff;
    border: 1px solid var(--bg);
    border-radius: 0.5rem;
    font-family: var(--font);
    &:hover{
        background-color: var(--accent-color);
        color: #fff;
        border: 1px solid var(--accent-color);
    }

`

const MobileNav = () => {
  const [sideBar, setSideBar] = useState(false)

  const setBar = (open)=>{
    setSideBar(open)
  }
  return (
    <Sidebar        
    sidebar={
      <Div>
   <Link to="/" ><FontAwesomeIcon icon={faHome}/> Home</Link>
    <Link to="/about" ><FontAwesomeIcon icon={faUserNinja} /> About</Link>
    <Link to="/projects"><FontAwesomeIcon icon={faBarsProgress}/> Projects</Link>
    <Link to='/contact' ><FontAwesomeIcon icon={faAddressCard} /> Contact</Link>
    <Button><a href='https://docs.google.com/document/d/1cJHzsbkFGgoLiy28SD8_phap-cW4ONm-/edit?usp=sharing&ouid=112986666847973219939&rtpof=true&sd=true' target="_blank"><FontAwesomeIcon icon={faFileDownload}/> Resume</a></Button>
     </Div>
    
    }
    open={sideBar}
    onSetOpen={setBar}
    styles={{ sidebar: { background: "var(--orange)" } }}>

 <FontAwesomeIcon icon={faBars} onClick={() => setBar(true)} style={{fontSize: "2rem", marginleft: "7rem", textAlign: "left"}} />
        
 </Sidebar>
  )
}

export default MobileNav