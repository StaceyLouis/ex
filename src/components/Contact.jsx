import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Title from "../subComponents/Title"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--bg);
  font-family: var(--font);
 
  h2{
    color: var(--heading);
    margin: 1rem;
    font-size: 4rem;
    text-align: left;
    margin-left: 9rem;
  }
  .icon{
    color: var(--green);
    width: 0.5rem;
    margin-left: 0.6rem;
  }
h3{
  color: var(--accent-color);
  font-size: 2rem;
}
p{
  width: 60%;
  margin: auto;
  font-size: 1.5rem;
  margin-top: 2rem;
}
`
const Button = styled.button`
    background: transparent;
    padding: 1rem;
    border: 1px solid var(--accent-color);
    border-radius: 1rem;
    background-color: var(--accent-color);
    a{
        text-decoration: none;
        color: var(--heading);
        font-size: 2rem;
        padding: 2rem;
        font-family: var(--font);

    }
`
const Form = styled.form`
    width: 40rem;
    margin: auto;
    input{
      background: transparent;
      margin: 0.3rem;
      border: 0.1rem solid var(--pink);
      width: 100%;
      height: 3rem;
      color: white;
      font-size: 1.5rem;

    }
    #email{
      border: 0.1rem solid var(--orange);
    }
    .input{
      border: 0.1rem solid var(--green);
      width: 47%;
      display: inline;
      color: white;
      font-size: 2rem;
    }
   textarea{
    background: transparent;
    border: 0.1rem solid var(--orange);
    width: 100%;
    height: 10rem;
    margin: 0.3rem;
    color: white;
    font-size: 2rem;
   }
   button{
    background: var(--orange);
    color: var(--heading);
    font-family: var(--font);
    padding: 1rem;
    width: 50%;
    margin: auto;
    border: none;
    font-weight: bolder;
    margin-bottom: 0.2rem;
    
   }
`
const Contact = () => {
  const form = useRef()

  const sendEmail= e =>{
    e.preventDefault()

    emailjs.sendForm("service_h9a1n0m", "template_9mt710c", form.current, '0u4C7w8LVMh5ZtVUb')
    .then(res => console.log(res.text),
          err=> console.log(err.text)
    )
    e.target.reset()
  }
  return (
    <Container>
      <Title text="Contact" />
            <h2>Get In Touch</h2>
            <p>If you have any questions, project ideas or you want to say “hello”, please fill out the form below and I will reply you shortly.</p>
{/*        <ul>
            <div>
            <li>Name: Stacey Louis </li>
            <li>Nationality: USA</li>
            <li>Location: NYC</li>
            </div><div>
            <li> Freelance: Available </li>
            <li>Languages French, Spanish, English, German</li>
            <li>EMail: stacey@staceylouis.com</li>
            </div>
  </ul> */}
       

      <div>
        <Form ref={form} onSubmit={sendEmail}>
          <input type="text" className="input" placeholder="Name" name="user_name"/>
          <input type="email" className="input" placeholder="Email" name="user_email" id="email"/>
          <br/>
          <input type="tel" classname="phone" placeholder="Phone" name="user_phone" />
          <br/>
          <textarea placeholder="Message" name="message"></textarea>
          <br/>
          <button type="submit">SEND MESSAGE</button>
        </Form>

      </div>
      <h4>Avalailble for work  <FontAwesomeIcon icon={faCircle} className="icon"/></h4>
    </Container>
  )
}

export default Contact