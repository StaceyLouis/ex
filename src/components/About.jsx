import { Container } from "../styles/globalStyles"
import styled from "styled-components"
import logo from '../assets/images/stacey.png'

const Flex = styled.div`
    color: var(--p-color);
    height: 80vh;
    margin-top: 2rem;
    display: flex;
    flex-flow: row nowrap;
    div{
        width: 40%;
    }
    h2{
        font-size: 3rem;
        color: var(--accent-color);
    }
    h4{
        font-size: 1.5rem;
        text-align: left;
        margin: 1rem 0;
        font-weight: bolder;
    }
    p{
        font-size: 1.2rem;
        text-align: left;
    }
    hr{
        border: 1px solid var(--green);
    }
`

const About = () => {
  return (
    <Container>
        <h1>About Me</h1>
        <Flex>
        <div>
            <img src={logo} alt="profile-photo" style={{width:300}}/>
        </div>
        <div>
        <h2>I'm Stacey Louis</h2>
        <h4>A Full Stack Developer and MERN Stack instructor</h4>
        <p> I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
        <hr/>
        <h4>Personal Info</h4>
        Name: Stacey Louis 
        Nationality: USA
        Freelance: Available 
        Languages French, Spanish, English, German
        EMail: stacey@staceylouis.com

        <button>Download Resume</button>
        </div>
        </Flex>
    </Container>
  )
}

export default About