import TextTransition,{presets} from "react-text-transition"
import { useState } from "react"
import styled from "styled-components"
import { useEffect } from "react"
import MobileNav from "./MobileNav"


export const Container = styled.section`
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100%;
    max-height: 100vh;
    background-color: var(--bg);
    font-family: var(--font);
    color: var(--font);
    
`
export const Flex = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    justify-center: center;
    align-items: center;
    align-content: center;
    margin-left: 2rem;
    max-width: 92vw;
`
export const Sect = styled.p`
    color: #ccc;
    width: 89%;
    font-size: 1.7rem;
    text-align: left;
`
const H3 = styled.h3`
    color: var(--orange);
    font-family: var(--font);
    font-size: 2rem;
    text-align: left;
`
const H1 = styled.h1`
    color: var(--accent-color);
    font-size: 5rem;
    margin-top: 2rem;

`
const H2= styled.h2`
    color: var(--pink);
    font-size: 1.5rem;
    font-weight: 500;
    text-align: left;
    margin: 1.5rem 0;
   
`
const TEXTS = [
    "Developer",
    "Artist",
    "Plant Mom"
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

const MobileHome = () => {
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
        <MobileNav />
        <Flex>
        <div>
    <H3>Hi! I'm Stacey</H3>
      <H1><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]} </TextTransition></H1>
      <H2>Based in NYC</H2>
      <Sect>I'm a developer focused on creating beautiful experiences with clean code. I am 
        also passionate about educating and improving the community around me.
      </Sect>
      <Div >
       <Link href="https://www.facebook.com/shtaceyologie/" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/FA7453/facebook-f.png"/></Link>
       <Link href="h0ttps://github.com/StaceyLouis" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/FFB964/github.png"/></Link>
       <Link href="mailto:staceylouis@icloud.com" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/66e2dc/mail.png"/></Link>
       <Link to="http://www.linkedin/staceylouis" target='_blank' className="icon"><img src="https://img.icons8.com/ios-filled/50/fa5386/linkedin.png"/> </Link>
      </Div>
      </div> 
      </Flex>
    </Container>
  )
}
export default MobileHome