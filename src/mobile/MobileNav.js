import { slide as Menu } from 'react-burger-menu'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div`
  color: white;
`

const MobileNav = () => {
  return (
 <Div>
  <Link to="/">Home </Link>
  <Link to="/about">About</Link>
  <Link to="/projects">Projects </Link>
  <Link to="/contact">Contact</Link>
 </Div>
  )
}

export default MobileNav