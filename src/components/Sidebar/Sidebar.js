import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase, BsPerson, BsSunFill, BsMoonFill } from "react-icons/bs";
import developerImg from "../../assets/developer.png";
import "./Sidebar.scss";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import SpinningBorder from "../SpinningBorder/SpinningBorder";
import { NavLink } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const Sidebar = () => {
  const [opened, setOpened] = useState(true);

  const sidebarToggler = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <aside className={`sidebar ${opened ? "opened" : ""}`}>
      <div className="sidebar__toggler" onClick={sidebarToggler}>
        <BurgerBtn opened={opened} />
      </div>
      <div className={`sidebar__logo ${opened ? "opened" : ""}`}>
        <SpinningBorder>
          <figure className="sidebar__logo__wrapper">
            <img src={developerImg} alt="developer" />
          </figure>
        </SpinningBorder>
        <h1 className="sidebar__logo__title">Mohamed Mahmoud</h1>
      </div>
      <nav className="sidebar__content">
        <ul className="sidebar__content__list">
          <li className="sidebar__content__list__item">
            <NavLink to='/Home' className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
                <AiOutlineHome />
              </div>
              <p>Home</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/About' className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
                <BsPerson />
              </div>
              <p>About</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/Portfolio' className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
                <BsBriefcase />
              </div>
              <p>Portfolio</p>
            </NavLink>
          </li>
          <li className="sidebar__content__list__item">
            <NavLink to='/Contact' className="sidebar__content__list__item__link">
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
      <div className="sidebar__theme-toggler">
        <ThemeToggler showCheckbox={opened}/> 
      </div>
    </aside>
  );
};

export default Sidebar;
