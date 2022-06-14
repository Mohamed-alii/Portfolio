import React, { useContext } from "react";
import { BsGithub, BsLinkedin, BsFacebook } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import DeveloperImg from "../../components/DeveloperImg/DeveloperImg";
import  cv  from '../../assets/Mohamed Mahmoud .pdf';
import lamp from '../../assets/lamp.png'
import ColorsContext from "../../store/colors-store";
import "./Home.scss";

const Home = () => {

  const colorsCxt = useContext(ColorsContext);

  return (
    <header className="header">
      <div className="header__img-wrapper">
        { (colorsCxt.isCurrentThemeDark && lamp) && <img className="lamp" src={lamp} alt='lamp'/>}
        <DeveloperImg />
      </div>
      <div className="header__title">
        <h2>Mohamed Abd Al-Qader</h2>
        <p>I'm a Front-End Developer.</p>
      </div>
      <div className="header__socials">
        <a title="Github"><BsGithub size={23} /></a>
        <a title="Linked In"><BsLinkedin size={23} /></a>
        <a title="Codepen"><FiCodepen size={23} /></a>
        <a title="Facebook"><BsFacebook size={23} /></a>
      </div>
      <div className="header__cv">
        <a href={cv} download='Mohamed Abd El-Qader.pdf' className="cross_line">
                Download CV 
        </a>
      </div>
    </header>
  );
};

export default Home;
