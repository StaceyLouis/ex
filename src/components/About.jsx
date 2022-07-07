import styled from "styled-components"
import logo from '../assets/images/image.png'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Title from '../subComponents/Title'
import '../styles/about.scss'
import Skillbar from "react-skillbars"
import Nav from "./Nav"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
   
    font-family: "Jost";
`
const Flex = styled.div`
font-family: (--font);
    color: var(--p-color);
    height: 80vh;
    margin-top: 2rem;
    display: flex;
    flex-flow: row nowrap;
    .img{
        width: 50%;
        img{
            box-shadow: 0 0 20px 20px #191826 inset;
        }
    }
    .content{
        margin-top: 3rem;
        width: 40%;
    }
    h2{
        font-size: 3rem;
        color: var(--pink);
        text-align: left;
      

    }
    h4{
        font-size: 1.1rem;
       
        text-align: left;
        margin: 1rem 0;
        color: var(--green);
        margin-bottom: 2rem;
    }
    h3{
        text-align: left;
        font-size: 2rem;
        color: var(--orange);
        margin: 0.2rem 0;
    
    }
    p{
        font-size: 1.1rem;
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
            margin: 1rem;
            line-height: 2rem;
            list-style-type: none;
        }
    }
`

const Button = styled.button`
    display: block;
    background: transparent;
    padding: 1rem;
    font-size: 1.5rem;
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
const About = () => {
    const skills = [
        {type: "HTML/CSS", level: 95},
        {type: "Javascript", level: 85},
        {type: "MERN", level: 90},
        {type: "MySql", level: 80},
        {type: "Python", level: 80}


      ];
  return (
    <Container>
        <Nav />
        <Title text="About Me"/>
        <Flex>
        <div className="img">
            <img src={logo} alt="profile-photo" style={{width: "20rem"}}/>
        </div>
        <div className="content">
        <h2>I'm Stacey Louis</h2>
        <h4>Full Stack Developer | MERN Stack Instructor</h4>
        <p> 
        I  spend my day coding React and Javascript. I love learning new technologies and implementing them into new projects.
        <span style={{color: "var(--green)"}}>I build with excitement, flexibility and a quick turn around.</span>
        </p>
        <hr/>
            <h3>Skills</h3>
    
            <Skillbar skills={skills} colors = {{
  bar: 'var(--accent-color)',
  title: {
    text: 'var(--accent-color)',
    background: 'var(--accent-color)'
  }
}} />
        </div>
        </Flex>
    </Container>
  )
}

export default About