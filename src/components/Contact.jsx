import styled from "styled-components"
import { Container } from "../styles/globalStyles"

const Button = styled.button`
    background: transparent;
    padding: 1rem;
    width: 40%;
    border: 1px solid #449938;
    border-radius: 1rem;
    a{
        text-decoration: none;
        color: var(--accent-color);
        font-size: 2rem;
        padding: 2rem;
        font-family: var(--font);

    }
`

const Contact = () => {
  return (
    <Container>
        <Button><a href="mailto:staceylouis@icloud.com" target="_blank">Email Me</a></Button>
    </Container>
  )
}

export default Contact