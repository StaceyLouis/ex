import { faHomeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const style = {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    margin: "0.5rem"
}

const Div = styled.div`
    width: 100vw;
    margin: auto;
    text-align: center;
    background-color: var(--bg);
`
const HomeButton = () => {
  return (
    <Div>
 <Link to="/"><FontAwesomeIcon icon={faHomeAlt} style={style}/></Link>
 </Div>
  )
}

export default HomeButton