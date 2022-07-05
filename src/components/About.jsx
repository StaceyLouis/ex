import styled from "styled-components"
import logo from '../assets/images/image.png'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Title from '../subComponents/Title'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: var(--bg);
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
        font-weight: bold;

    }
    h4{
        font-size: 1.1rem;
        font-weight: bold;
        text-align: left;
        margin: 1rem 0;
        color: var(--green);
        margin-bottom: 2rem;
    }
    h3{
        text-align: left;
        font-size: 2rem;
        color: var(--orange);
        margin: 1rem;
        font-weight: bold;
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
            font-size: 1.5rem;
            margin: 1rem;
            line-height: 2rem;
            list-style-type: square;
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
  return (
    <Container>
        <Title text="About Me"/>
        <Flex>
        <div className="img">
            <img src={logo} alt="profile-photo" style={{width: "30rem"}}/>
        </div>
        <div className="content">
        <h2>I'm Stacey Louis</h2>
        <h4>Full Stack Developer | MERN Stack Instructor</h4>
        <p> I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
        <hr/>
            <h3>Skills</h3>

            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>CSS</li>

            </ul>
        
        
       
        
        

        <Button><FontAwesomeIcon icon={faFileDownload}/> Resume</Button>
        </div>
        </Flex>
    </Container>
  )
}

export default About