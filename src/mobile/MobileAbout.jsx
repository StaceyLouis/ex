import MobileNav from './MobileNav'
import styled from "styled-components"
import logo from '../assets/images/image.png'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Title from '../subComponents/Title'
import '../styles/about.scss'
import ReactSkillbar from "react-skillbars"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--bg);
    font-family: "Jost";
`
const Flex = styled.div` 
    font-family: (--font);
    color: var(--p-color);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .content{
        margin-top: 3rem;
        width: 70%;
    }
    h2{
        font-size: 2rem;
        color: var(--pink);
        text-align: left;
      

    }
    h4{
        font-size: 1.1rem;
       
        text-align: left;
        margin: 1rem 0;
        color: var(--green);
       
    }
    h3{
        text-align: left;
        font-size: 1rem;
        color: var(--orange);
    
    }
    p{
        font-size: 1rem;
        text-align: left;
        color: var(--accent-color);
        line-height: 1.6rem;
    }
    hr{
        border: 1px solid var(--green);
        margin-bottom: 2rem;
    }
    ul{
        display: flex;
        flex-flow: row wrap;
    
        li{
            color: var(--heading);
            font-size: 1rem;
            margin: 0.6rem;
            line-height: 2rem;
            list-style-type: none;
        }
    }
`

const Button = styled.button`
    display: block;
    background: transparent;
    padding: 0.4rem;
    font-size: 1rem;
    margin: 2rem;
    color: var(--accent-color);
    border: 1px solid var(--green);
    border-radius: 1rem;
    font-family: var(--font);
    &:hover{
        background-color: var(--accent-color);
        color: #fff;
        border: 1px solid var(--accent-color);
    }

`

const MobileAbout = () => {
  return (
    <Container>
        <MobileNav />
        <Title text="About Me"/>
    <Flex>
    <div className="img">
        <img src={logo} alt="profile-photo" style={{width: "5rem"}}/>
    </div>
    <div className="content">
    <h2>I'm Stacey Louis</h2>
    <h4>Full Stack Developer | MERN Stack Instructor</h4>
    <p> I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. </p>
    <hr/>
        <h3>Skills</h3>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>Framer Motion</li>
            <li>MySQL</li>
            <li>Java</li>
            <li>Python</li>
            <li>OOP</li>
           

        </ul>
    
    
   
    
    

    <Button><FontAwesomeIcon icon={faFileDownload}/> Resume</Button>
    </div>
    </Flex>
</Container>
)
}

export default MobileAbout