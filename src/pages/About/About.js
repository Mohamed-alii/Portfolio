import React, { useRef } from 'react';
import './About.scss';

const About = () => {

  const nameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const ContactSubmitHandler = (e) => {  
    e.preventDefault();
    const nameInput = nameRef.current.value;
    const subjectInput = subjectRef.current.value;
    const emailInput = emailRef.current.value;
    const messageInput = messageRef.current.value;
    console.log(nameInput)
    console.log(subjectInput)
    console.log(emailInput)
    console.log(messageInput)

  }


  return <section className='contact'>
    <header className='contact__header'>
        <h3>Contact Me</h3>
    </header>
    <div className='contact__content'>
    <div className='contact__info'>
      <div>
        <i></i>
        <span>muhamed.m.abdelkader@gmail.com</span>
      </div>
      <div>
        <i></i>
        <span>0124578545</span>
      </div>
    </div>
    <form className='contact__form' id='contact' onSubmit={ContactSubmitHandler}>
      <input ref={nameRef} type='text' placeholder='Name' />
      <input ref={subjectRef} type='text' placeholder='Subject' />
      <input ref={emailRef} type='email' placeholder='Email' />
      <textarea ref={messageRef} placeholder='Message...' />
      <button type='submit'>Send</button>
    </form>
    </div>
  </section>;
};

export default About;
