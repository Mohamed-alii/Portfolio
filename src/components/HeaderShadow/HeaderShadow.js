import React from "react";
import './HeaderShadow.scss';

const HeaderShadow = ({headerTitle}) => {
  return (
    <header className="header-shadow">
      <span className="header-shadow__overlay">{headerTitle}</span>
      <h3 className="header-shadow__title">{headerTitle}</h3>
    </header>
  );
};

export default HeaderShadow;
