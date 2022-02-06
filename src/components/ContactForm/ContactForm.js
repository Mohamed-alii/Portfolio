import React, { useRef } from "react";
import "./ContactForm.scss";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {

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
      console.log(nameInput);
      console.log(subjectInput);
      console.log(emailInput);
      console.log(messageInput);
    };

  return (
    <form
      className="form"
      onSubmit={ContactSubmitHandler}
    >
      <input
        className="form__name-input"
        ref={nameRef}
        type="text"
        placeholder="Name"
      />
      <input
        className="form__subject-input"
        ref={subjectRef}
        type="text"
        placeholder="Subject"
      />
      <input
        className="form__email-input"
        ref={emailRef}
        type="email"
        placeholder="Email"
      />
      <textarea
        className="form__message-input"
        ref={messageRef}
        placeholder="Message..."
      />
      <button className="form__submit-btn" type="submit">
        Send &nbsp;&nbsp; <FiSend />
      </button>
    </form>
  );
};

export default ContactForm;
