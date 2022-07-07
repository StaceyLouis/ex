import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Sidebar from 'react-sidebar'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAddressCard, faHome, faUserNinja, faBarsProgress} from '@fortawesome/free-solid-svg-icons'


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
     </Div>
    
    }
    open={sideBar}
    onSetOpen={setBar}
    styles={{ sidebar: { background: "var(--orange)" } }}>

 <button onClick={() => setBar(true)}>
          Open sidebar
        </button>
 </Sidebar>
  )
}

export default MobileNav