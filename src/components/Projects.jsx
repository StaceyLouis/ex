import { useState } from "react"
import data from "../assets/data"
import styled from "styled-components"

const Container = styled.div`
min-width: 100vw;
min-height: 100vh;
max-width: 100%;
max-height: 100vh;
background-color: var(--bg);
font-family: var(--font);
color: var(--font);
`

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  color: var(--font);
`
const Img = styled.img`
  width: 17rem;
  height: 12rem;
  object-fit: cover;
`
const Projects = () => {
    const [projects] = useState(data)

    const list= projects.map((i)=>{
        return(
            <div key={i.id}>
                <Img src={i.img}/>
                <br/>
                <h2>{i.title}</h2>
                <p>{i.desc}</p>
                <button>Github</button> <button>Demo site</button>
            </div>
        )
    })
  return (

        <Container>
     <h1>
      Projects
     </h1>
      <Flex>
        {list}
      </Flex>
        </Container>

  )
}

export default Projects