import React from "react";
import "./BurgerBtn.scss";

const BurgerBtn = ({ opened }) => {
  return (
    <div className={`burger-btn`}>
      <div className={`burger-btn__line ${opened ? 'opened' : ''}`}></div>
    </div>
  );
};

export default BurgerBtn;
