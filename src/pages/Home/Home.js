import React from "react";
import "./Home.scss";
import developerImg from "../../assets/developer.png";
import { BsDownload, BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import  cv  from '../../assets/Mohamed Mahmoud .pdf';

const Home = () => {

  return (
    <header className="header">
      <div className="header__img-wrapper">
        <img src={developerImg} alt="developer picture" />
      </div>
      <div className="header__title">
        <h2>Mohamed Mahmoud</h2>
        <p>I'm a Front-End Developer.</p>
      </div>
      <div className="header__socials">
        <a title="Github"><BsGithub size={23} /></a>
        <a title="Linked In"><BsLinkedin size={23} /></a>
        <a title="Codepen"><FiCodepen size={23} /></a>
        <a title="Facebook"><BsFacebook size={23} /></a>
      </div>
      <div className="header__cv">
        <a href={cv} download='Mohamed Mahmoud.pdf' className="header__btn">
          <span className="header__btn-text">Download CV</span>
          <span className="header__btn-icon">
            <BsDownload />
          </span>
        </a>
      </div>
    </header>
  );
};

export default Home;
