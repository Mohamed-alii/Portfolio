import React, { useContext } from "react";
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import DeveloperImg from "../../components/DeveloperImg/DeveloperImg";
import  cv  from '../../assets/Mohamed Abd El-Qader.pdf';
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
        <h1>Mohamed Abd Al-Qader</h1>
        <p>I'm a Front-End Developer.</p>
      </div>
      <div className="header__socials">
        <a target="_blanck" href="https://github.com/Mohamed-alii" title="Github"><BsGithub size={23} /></a>
        <a target="_blanck" href="https://www.linkedin.com/in/mohamed-abd-el-qader-479bb5146/" title="Linked In"><BsLinkedin size={23} /></a>
        <a target="_blanck" href="https://www.instagram.com/m__abdelqader/?fbclid=IwAR2vDg7usZhbMpvtdJhCIODvu51vmv8er3lWf1k4ruAS-YKrj5vIoSTrZIQ" title="Codepen"><BsInstagram size={23} /></a>
        <a target="_blanck" href="https://www.facebook.com/profile.php?id=100003335050703" title="Facebook"><BsFacebook size={23} /></a>
      </div>
      <div className="header__cv m-b-100">
        <a href={cv} download='Mohamed Abd El-Qader.pdf' className="cross_line">
                Download CV 
        </a>
      </div>
    </header>
  );
};

export default Home;
