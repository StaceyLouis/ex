import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg);
 
  h4{
    color: var(--heading);
    margin: 1rem;
    font-size: 1.4rem;
  }
  .icon{
    color: var(--green);
    width: 0.5rem;
    margin-left: 0.6rem;
  }
h3{
  color: var(--accent-color);
  font-size: 2rem;
}
`
const Button = styled.button`
    background: transparent;
    padding: 1rem;
    border: 1px solid var(--accent-color);
    border-radius: 1rem;
    background-color: var(--accent-color);
    a{
        text-decoration: none;
        color: var(--heading);
        font-size: 2rem;
        padding: 2rem;
        font-family: var(--font);

    }
`

const Contact = () => {
  return (
    <Container>
             <h3>Personal Info</h3>
        <ul>
            <div>
            <li>Name: Stacey Louis </li>
            <li>Nationality: USA</li>
            <li>Location: NYC</li>
            </div><div>
            <li> Freelance: Available </li>
            <li>Languages French, Spanish, English, German</li>
            <li>EMail: stacey@staceylouis.com</li>
            </div>
        </ul>
      <div>
      <Button><a href="mailto:staceylouis@icloud.com" target="_blank">Email Me</a></Button>
      <h4>Avalailble for work  <FontAwesomeIcon icon={faCircle} className="icon"/></h4>

      </div>
    </Container>
  )
}

export default Contact