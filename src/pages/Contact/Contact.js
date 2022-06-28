import React from "react";
import "./Contact.scss";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import ContactForm from "../../components/ContactForm/ContactForm";
import HeaderShadow from "../../components/HeaderShadow/HeaderShadow";

const Contact = () => {

  return (
    <section className="contact">
        <HeaderShadow headerTitle='Contact Me'/>
      <div className="contact__content">
        <ContactForm />
        <div className="contact__info">
          <div className="contact__info-title">
            <div className="contact__info-icon-wrapper">
              <MdEmail size={40} />
            </div>
            <div className="contact__info-content">
              <h3>Email</h3>
              <h4>muhamed.m.abdelkader@gmail.com</h4>
            </div>
          </div>

          <div className="contact__info-title">
            <div className="contact__info-icon-wrapper">
              <BsWhatsapp size={40} />
            </div>
            <div className="contact__info-content">
              <h3>Whatsapp</h3>
              <h4>+20-111-646-8062</h4>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
