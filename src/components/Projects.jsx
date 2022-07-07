import { useState } from "react"
import data from "../assets/data"
import styled from "styled-components"
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Title from '../subComponents/Title'
import '../styles/proj.scss'
import Nav from "./Nav"



const Polaroid = styled.div`
width: 18rem;
background-color: var(--bg);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
margin: 1rem;
margin-bottom: 25px;
border-radius: 0.2rem;
text-align: left;
span{
  color: var(--p-color);
}
`

const Projects = () => {
    const [projects] = useState(data)

    const list= projects.map((i)=>{
        return(
          <div className="container" key={i.id}>
            <img src={i.img} alt={i.title} />
            <div className="overlay">
              <h2>{i.title}</h2>
              <p>{i.desc}</p>
              <span>{i.tech}</span>
              <span><a href={i.repo} target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="icon"/></a><a href={i.url} target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className="icon icon1"/></a></span>
           

            </div>
            </div>
        )
    })
  return (

        <div className="main">
          <Nav />
          <Title text="Projects"/>
          <div className="flex">
          {list}
          </div>
            
        </div>

  )
}

export default Projects