import { useState } from "react"
import data from "../assets/data"
import styled from "styled-components"
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Title from '../subComponents/Title'
import '../styles/proj.scss'
import MobileNav from "./MobileNav"


const Link = styled.a`
text-decoration: none;
color: white;
text-align: left;
margin: 1rem 1rem 1rem 0;
font-size: 3rem;

`

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

const Div = styled.div`
width: 100vw;
display: flex;

justify-content: center;
align-content: flex-end;
margin-top: 4rem;
.icon{
  img{
    width: 2.3rem;
  }
}
`


const MobileProjects = () => {
    const [projects] = useState(data)

    const list= projects.map((i)=>{
        return(
          <div className="container" key={i.id}>
            <img src={i.img} alt={i.title} />
            <div className="overlay">
              <h2>{i.title}</h2>
              <span>{i.tech}</span>
              <span><a href={i.repo} target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="icon"/></a><a href={i.url} target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} className="icon icon1"/></a></span>
           

            </div>
            </div>
        )
    })
  return (

        <div className="main">
          <MobileNav/>
          <Title text="Projects"/>
         
          <div className="flex mobile-flex">
          {list}
          </div>
          <Div >
       <Link href="https://www.facebook.com/shtaceyologie/" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/FA7453/facebook-f.png"/></Link>
       <Link href="h0ttps://github.com/StaceyLouis" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/FFB964/github.png"/></Link>
       <Link href="mailto:staceylouis@icloud.com" target="_blank" className="icon"><img src="https://img.icons8.com/ios-filled/50/66e2dc/mail.png"/></Link>
       <Link to="http://www.linkedin/staceylouis" target='_blank' className="icon"><img src="https://img.icons8.com/ios-filled/50/fa5386/linkedin.png"/> </Link>
      </Div>
        </div>

  )
}

export default MobileProjects