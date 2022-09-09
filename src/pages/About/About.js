import React from "react";
import HeaderShadow from "../../components/HeaderShadow/HeaderShadow";
import { BsFillPatchCheckFill, BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux, SiTypescript, SiReduxsaga } from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiSass } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaAngular } from "react-icons/fa";
import { SiAngularjs } from "react-icons/si";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <HeaderShadow headerTitle="About me" />
      <div className="about__summary m-b-3">
        <p className="m-b-1">Hello, I am Mohamed Abd El-Qader.</p>
        <p className="m-b-1">
          I'm a Junior Frontend Developer with a passion for combining the art
          of design with the art of programming using the latest technologies.
        </p>
        <p className="m-b-1">
          I have extensive knowledge of HTML5 , css3 , bootstrap, JavaScript,
          Angular and React Combined with my communication and problem-solving
          skills.
        </p>
      </div>

      <h2 className="m-b-1">Skills</h2>
      <div className="about__skills m-b-3">
        <span className="about__skills__skill">
          <AiFillHtml5 size={30} className="skill-logo" /> <p>HTML / HTML 5</p>
        </span>
        <span className="about__skills__skill">
          <IoLogoCss3 size={30} className="skill-logo" /> <p>CSS / CSS 3</p>
        </span>
        <span className="about__skills__skill">
          <DiSass size={30} className="skill-logo" /> <p>SCSS</p>
        </span>
        <span className="about__skills__skill">
          <BsFillBootstrapFill size={30} className="skill-logo" />{" "}
          <p>Bootstrap</p>
        </span>
        <span className="about__skills__skill">
          <TbBrandJavascript size={30} className="skill-logo" />{" "}
          <p>Javascript</p>
        </span>
        <span className="about__skills__skill">
          <SiTypescript size={30} className="skill-logo" /> <p>Typescript</p>
        </span>
        <span className="about__skills__skill">
          <SiAngularjs size={30} className="skill-logo" /> <p>Angular js</p>
        </span>
        <span className="about__skills__skill">
          <FaAngular size={30} className="skill-logo" /> <p>Angular</p>
        </span>
        <span className="about__skills__skill">
          <FaReact size={30} className="skill-logo" /> <p>React</p>
        </span>
        <span className="about__skills__skill">
          <SiRedux size={30} className="skill-logo" /> <p>Redux</p>
        </span>
        <span className="about__skills__skill">
          <SiReduxsaga size={30} className="skill-logo" /> <p>Redux saga</p>
        </span>
        <span className="about__skills__skill">
          <FaGitAlt size={30} className="skill-logo" />{" "}
          <p>Git ( Github - TFS )</p>
        </span>
      </div>

      <h2 className="m-b-1">Experience</h2>
      <div className="about__experience m-b-3">
        <div className="about__experience-container h-100">
          <div className="d-flex-col justify-content-between h-100 text-left">
            <p className="text-right">Present</p>
            <p>Feb 2022</p>
          </div>
          <div className="about__experience-circles-container d-flex-col justify-content-between h-100">
            <BsFillCheckCircleFill className="about__experience-circle"></BsFillCheckCircleFill>
            <span className="about__experience-circles-line"></span>
            <BsFillCheckCircleFill className="about__experience-circle"></BsFillCheckCircleFill>
          </div>
          <div className="about__experience-content d-flex-col justify-content-between pl-1">
            <div className="about__experience-company-logo m-b-1">
              <figure className="mr-1">
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E0BAQESwykbcXD1aA/company-logo_200_200/0/1519874799921?e=2147483647&v=beta&t=dYq4lvE10GuenyBEOFPgxGS8BV2kDPo9frbNG2zR-2s"
                  alt="itworxeducation company logo"
                />
              </figure>
              <div>
                <p className="about__experience-job-title">
                  Frontend Developer
                </p>
                <p className="font-07">
                  <a
                    className="about__experience-company-name"
                    href="https://itworx.education/"
                    target="_blanck"
                  >
                    ITWORX Education
                  </a>{" "}
                  - Full time
                </p>
              </div>
            </div>
            <h3 className="m-b-1">Responsibilities</h3>
            <ul className="about__experience-list pl-1">
              <li>
                <p>
                  Working closely with UX designers, backend developers, testers and
                  product managers to develop client-side web Apps.
                </p>
              </li>
              <li>
                <p>Building new features using Angular TS.</p>
              </li>
              <li>
                <p>Enhancing projects built using Angularjs.</p>
              </li>
              <li>
                <p>Upgrading modules from angularjs to Angular TS.</p>
              </li>
              <li>
                <p>Being part of scrum team. </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
