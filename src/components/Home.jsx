import { Container,Sect, Flex } from "../styles/globalStyles"
import TextTransition,{presets} from "react-text-transition"
import { useState } from "react"
import styled from "styled-components"
import { useEffect } from "react"
import gif from '../assets/images/icons8-linkedin.gif'

const H3 = styled.h3`
    color: var(--orange);
    font-family: var(--font);
    font-size: 2rem;
    text-align: left;
`
const H1 = styled.h1`
    color: var(--accent-color);
    font-size: 7rem;
    margin-top: 2rem;

`
const H2= styled.h2`
    color: var(--green);
    font-size: 3rem;
    font-weight: 500;
    text-align: left;
`
const TEXTS = [
    "Web Developer",
    "Visual Artist",
    "Plant Mom",
    "Animal Lover"
  ]

  const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;
    .icon{
      img{
        width: 2.3rem;
      }
    }
  `
  const Link = styled.a`
    text-decoration: none;
    color: white;
    text-align: left;
    margin: 1rem 1rem 1rem 0;
    font-size: 3rem;
    
  `
const Home = () => {
    const [index, setIndex] = useState(0)
    useEffect(()=> {
        const intervalId = setInterval(()=> 
        setIndex(index=> index + 1),
        2000
        )
        return () => clearInterval(intervalId)
    },[])

  return (
    <Container>
        <Flex>
        <div>
    <H3>Hi! I'm Stacey</H3>
      <H1><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]} </TextTransition></H1>
      <H2>Based in NYC</H2>
      <Sect>I'm a developer focused on creating beautiful experiences with clean code. I am 
        also passionate about educating and improving the community around me.
      </Sect>
      <Div >
       <Link href="https://www.facebook.com/shtaceyologie/" target="_blank" className="icon"><img src="https://img.icons8.com/dotty/80/FA7453/facebook-f.png"/></Link>
       <Link href="h0ttps://github.com/StaceyLouis" target="_blank" className="icon"><img src="https://img.icons8.com/wired/80/FFB964/github.png"/> </Link>
       <Link href="mailto:staceylouis@icloud.com" target="_blank" className="icon"><img src="https://img.icons8.com/dotty/80/66e2dc/new-post.png"/></Link>
       <Link to="http://www.linkedin/staceylouis" target='_blank' className="icon"><img src="https://img.icons8.com/wired/64/fa5386/linkedin--v2.png"/></Link>
      </Div>
      </div> 
      </Flex>
    </Container>
  )
}

export default Home