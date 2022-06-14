import React, { useState } from "react";
import "./ColorSwitcher.scss";
import Color from "../Color/Color";
import { IoColorPaletteOutline } from "react-icons/io5";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const colorsHexaArray = [
  { name: "red", color: "#FF3B3B" },
  { name: "green", color: "#05C270" },
  { name: "blue", color: "#0063F8" },
  { name: "orange", color: "#FF8801" },
  { name: "cyan", color: "#00CFDD" },
  { name: "purple", color: "#6500CD" },
];

const ColorSwitcher = () => {
  const [switcherIsOpened, setSwitcherIsOpened] = useState(false);

  const colorPaletteTogglerHandler = () => {
      setSwitcherIsOpened((prevState) => !prevState);
  };

  const colorsList = colorsHexaArray.map((color, index) => <Color key={`${index + color.color}`} color={color}/>);

  return (
    <div className={`color-switcher ${switcherIsOpened ? "slide-left" : "slide-right"}`}>
      <div className={`color-switcher__colors `}>
        <div
          className="color-switcher__icon-container"
          onClick={colorPaletteTogglerHandler}
        >
          <IoColorPaletteOutline size={35} className="color-switcher__icon" />
        </div>
        {colorsList}
      </div>

      <hr className="hr"/>

      <div className="color-switcher__theme-toggler">
        <ThemeToggler /> 
      </div>

    </div>
  );
};

export default ColorSwitcher;
