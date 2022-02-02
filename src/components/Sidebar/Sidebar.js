import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase, BsPerson } from "react-icons/bs";
import developerImg from "../../assets/developer.png";
import "./Sidebar.scss";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Sidebar = () => {

    const [opened, setOpened] = useState(true);

    const sidebarToggler = () => {
        setOpened(prevState => !prevState);
    }
  return (
    <aside className={`sidebar ${opened ? 'opened' : ''}`}>
      <div className="sidebar__toggler" onClick={sidebarToggler}>
        <BurgerBtn opened={opened}/>
      </div>
      <div className={`sidebar__logo ${opened ? 'opened' : ''}`}>
        <figure className="sidebar__logo__wrapper">
          <img src={developerImg} alt="developer" />
        </figure>
        <h1 className="sidebar__logo__title">Mohamed Mahmoud</h1>
      </div>
      <nav className="sidebar__content">
        <ul className="sidebar__content__list">
          <li className="sidebar__content__list__item">
            <a className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
                <AiOutlineHome />
              </div>
              <p>Home</p>
            </a>
          </li>
          <li className="sidebar__content__list__item">
            <a className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
                  <BsPerson />
              </div>
              <p>About</p>
            </a>
          </li>
          <li className="sidebar__content__list__item">
            <a className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
              <BsBriefcase />
              </div>
              <p>Portfolio</p>
            </a>
          </li>
          <li className="sidebar__content__list__item">
            <a className="sidebar__content__list__item__link">
              <span></span>
              <span></span>
              <div className="p-1">
              <AiOutlineMessage />
              </div>
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
