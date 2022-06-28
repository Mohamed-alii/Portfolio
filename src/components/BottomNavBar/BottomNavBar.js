import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsBriefcase, BsPerson } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./BottomNavBar.scss";

const BottomNavBar = () => {
  return (
    <nav className="bottom-navbar">
      <ul className="bottom-navbar__list">
        <NavLink to='/Home' className='bottom-navbar__list-item'>
            <AiOutlineHome />
        </NavLink>
        <NavLink to='/About' className='bottom-navbar__list-item'>
            <AiOutlineMessage />
        </NavLink>
        <NavLink to='/Portfolio' className='bottom-navbar__list-item'>
            <BsBriefcase />
        </NavLink>
        <NavLink to='/Contact' className='bottom-navbar__list-item'>
            <BsPerson />
        </NavLink>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
