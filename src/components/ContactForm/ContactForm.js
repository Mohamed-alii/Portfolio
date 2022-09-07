import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiSend } from "react-icons/fi";
import "./ContactForm.scss";

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
    const nameInputValidation = new RegExp(/^([^0-9]*)$/); // cannot contain a number or empty
    return (nameInputValidation.test(name) && (name ? true : false));
  };
  const validateEmail = (email) => {
    const emailInputValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/); // valid email
    return emailInputValidation.test(email.toLowerCase());
  };
  const validateMessage = (message) => {
    const messageInputValidation = message.trim() ? true : false; // can not be empty
    return messageInputValidation;
  };

  const contactSubmitHandler = (e) => {
    e.preventDefault();
    const nameInputValue = nameRef.current.value;
    const emailInputValue = emailRef.current.value;
    const messageInputValue = messageRef.current.value;

    if (!validateName(nameInputValue)) {
      setNameError("Please enter your name"); //error msg
    } else {
      setNameError(null);
    }
    if (!validateEmail(emailInputValue)) {
      setEmailError("Please enter a valid email."); //erroe msg
    } else {
      setEmailError(null);
    }
    if (!validateMessage(messageInputValue)) {
      setMessageError("Please enter your message"); //erroe msg
    } else {
      setMessageError(null);
    }

    if(validateName(nameInputValue) && validateEmail(emailInputValue) && validateMessage(messageInputValue)){
      sendFormData();
    }
  };

  const sendFormData = () => {
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
        type="text"
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
