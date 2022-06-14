import React, { useRef, useState } from "react";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const nameRef = useRef();
  const subjectRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const validateName = (name) => {
    const nameInputValidation = null; // cannot contain a number or empty
    return name.test();
  };
  const validateEmail = (email) => {
    const emailInputValidation = null; // valid email
    return email.test();
  };
  const validateMessage = (message) => {
    const messageInputValidation = null; // can not be empty
    return message.test();
  };

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    const nameInput = nameRef.current.value;
    const subjectInput = subjectRef.current.value;
    const emailInput = emailRef.current.value;
    const messageInput = messageRef.current.value;

    if (!validateName(nameInput)) {
      setNameError("error"); //error msg
    } else {
      setNameError(null); //error msg
    }
    if (!validateEmail(emailInput)) {
      setNameError("Please enter a valid email."); //erroe msg
    } else {
    }
    if (!validateMessage(messageInput)) {
      setNameError("Message can not be empty"); //erroe msg
    } else {
    }
    // emailjs
    //separate function call after validation
    emailjs
      .sendForm(
        "service_fxaivcf",
        "template_zhpl8yo",
        formRef.current,
        "user_z36amvTnRF5t906vGoN54"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <form ref={formRef} className="form" onSubmit={contactSubmitHandler}>
      <input
        className={`form__name-input  ${nameError ? "invalid" : ""}`}
        ref={nameRef}
        type="text"
        name="guest_name"
        placeholder="Name"
      />
      {nameError && <p className="error-msg">{nameError}</p>}
      <input
        className="form__subject-input"
        ref={subjectRef}
        type="text"
        name="guest_subject"
        placeholder="Subject"
      />
      <input
        className={`form__email-input ${emailError ? "invalid" : ""}`}
        ref={emailRef}
        type="email"
        name="guest_email"
        placeholder="Email"
      />
      {emailError && <p className="error-msg">{emailError}</p>}
      <textarea
        className={`form__message-input ${messageError ? "invalid" : ""}`}
        ref={messageRef}
        name="guest_message"
        placeholder="Message..."
      />
      {messageError && <p className="error-msg">{messageError}</p>}
      <button className="form__submit-btn" type="submit">
        Send &nbsp;&nbsp; <FiSend />
      </button>
    </form>
  );
};

export default ContactForm;
