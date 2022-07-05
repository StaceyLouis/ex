import styled from "styled-components"

const H1 = styled.h1`
padding: 3rem 0 3rem 5rem;
text-align: left;
color: var(--orange);
font-family: var(--font);
font-size: 2rem;
`

const Title = (props) => {
  return (
    <div>
    <H1>{props.text}</H1>
    </div>
  )
}

export default Title