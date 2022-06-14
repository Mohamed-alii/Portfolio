import React from "react";
import HeaderShadow from "../../components/HeaderShadow/HeaderShadow";
import { BsFillPatchCheckFill, BsFillBootstrapFill } from 'react-icons/bs';
import { SiRedux, SiTypescript, SiReduxsaga } from 'react-icons/si';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { DiSass } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaAngular } from 'react-icons/fa';
import { SiAngularjs } from 'react-icons/si';
import {  } from 'react-icons/';
import {  } from 'react-icons/';
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <HeaderShadow headerTitle="About me" />
      <div className="about__summary m-b-3">
        <p>Lorem Ipsum is simply dummy text of the printing and
           typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
             printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries,
               but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s
                 with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
           with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</p>
      </div>

      <h2 className="m-b-1">Skills</h2>
      <div className="about__skills m-b-3">
          <span className="about__skills__skill"><AiFillHtml5 className="skill-logo"/> <p>HTML / HTML 5</p></span>
          <span className="about__skills__skill"><IoLogoCss3 className="skill-logo"/> <p>CSS / CSS 3</p></span>
          <span className="about__skills__skill"><DiSass className="skill-logo"/> <p>SCSS</p></span>
          <span className="about__skills__skill"><BsFillBootstrapFill className="skill-logo"/> <p>Bootstrap</p></span>
          <span className="about__skills__skill"><TbBrandJavascript className="skill-logo"/> <p>Javascript</p></span>
          <span className="about__skills__skill"><SiTypescript className="skill-logo"/> <p>Typescript</p></span>
          <span className="about__skills__skill"><SiAngularjs className="skill-logo"/> <p>Angular js</p></span>
          <span className="about__skills__skill"><FaAngular className="skill-logo"/> <p>Angular</p></span>
          <span className="about__skills__skill"><FaReact className="skill-logo"/> <p>React</p></span>
          <span className="about__skills__skill"><SiRedux className="skill-logo"/> <p>Redux</p></span>
          <span className="about__skills__skill"><SiReduxsaga className="skill-logo"/> <p>Redux saga</p></span>
          <span className="about__skills__skill"><FaGitAlt className="skill-logo"/> <p>Git ( Github - TFS )</p></span>
      </div>

      <h2 className="m-b-1">Experience</h2>
      <div className="about__skills m-b-3">
          <span className="about__skills__skill"><FaGitAlt className="skill-logo"/> <p>Git ( Github - TFS )</p></span>
      </div>

    </section>
  );
};

export default About;
