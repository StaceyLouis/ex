import { useState } from "react"
import data from "../assets/data"
import styled from "styled-components"
import {  FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import Title from '../subComponents/Title'
import '../styles/proj.scss'
import MobileNav from "./MobileNav"
import { Slide,Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1432250767374-ee19cba37b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1514782831304-632d84503f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    caption: 'Slide 3'
  },
  {
    url:"https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    caption:"Slide 4"
  },
  {
    url:"https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    caption: "Slide 5"
  }

];

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
const Frame = styled.div`
width: 90vw;
margin: auto;
  height: 30rem;
  border-radius: 1rem;
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
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
         <Fade>
         {slideImages.map((slideImage, index)=> (
            <div className="each-fade" key={index}>
              <Frame style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </Frame>
            </div>
          ))} 
          </Fade> 
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