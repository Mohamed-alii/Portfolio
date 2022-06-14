import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase, BsPerson } from "react-icons/bs";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import SpinningBorder from "../SpinningBorder/SpinningBorder";
import DeveloperImg from "../DeveloperImg/DeveloperImg";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  const sidebarToggler = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <aside className={`sidebar ${opened ? "opened" : ""}`}>
      <div className="sidebar__toggler" onClick={sidebarToggler}>
        <BurgerBtn opened={opened} />
      </div>
      <div className={`sidebar__logo mx-2 ${opened ? "opened" : ""}`}>
        <SpinningBorder>
          <figure className="sidebar__logo__wrapper">
              <DeveloperImg />
          </figure>
        </SpinningBorder>
        {/* <h1 className="sidebar__logo__title">Mohamed Abd Al-Qader</h1> */}
      </div>
      <nav className="sidebar__content">
        <ul className="sidebar__content__list">
          <li className="sidebar__content__list__item">
            <NavLink to='/Home' className="sidebar__content__list__item__link" title="Home">
              <span></span>
              <span></span>
              <div className="p-1">
                <AiOutlineHome />
              </div>
              <p>Home</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/About' className="sidebar__content__list__item__link" title="About">
              <span></span>
              <span></span>
              <div className="p-1">
                <BsPerson />
              </div>
              <p>About</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/Portfolio' className="sidebar__content__list__item__link" title="Portfolio">
              <span></span>
              <span></span>
              <div className="p-1">
                <BsBriefcase />
              </div>
              <p>Portfolio</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/Contact' className="sidebar__content__list__item__link" title="Contact">
              <span></span>
              <span></span>
              <div className="p-1">
                <AiOutlineMessage />
              </div>
              <p>Contact</p>
            </NavLink>
          </li>
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;
