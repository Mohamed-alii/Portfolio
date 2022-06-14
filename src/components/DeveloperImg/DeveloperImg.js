import React, { useState, useContext, useEffect } from "react";
import developerCyan from "../../assets/developerCyan.png";
import developerGreen from "../../assets/developerGreen.png";
import developerRed from "../../assets/developerRed.png";
import developerBlue from "../../assets/developerBlue.png";
import developerOrange from "../../assets/developerOrange.png";
import developerPurple from "../../assets/developerPurple.png";
import ColorsContext from "../../store/colors-store";
import "./DeveloperImg.scss";

const DeveloperImg = () => {
  const [currentImg, setCurrentImg] = useState(developerOrange); // orange is the default img
  const colorsContext = useContext(ColorsContext);

  useEffect(() => {
    switch (colorsContext.currentColor.name) {
      case 'red':
        setCurrentImg(developerRed);
        break;
      case "green":
        setCurrentImg(developerGreen);
        break;
      case "blue":
        setCurrentImg(developerBlue);
        break;
      case "orange":
        setCurrentImg(developerOrange);
        break;
      case "cyan":
        setCurrentImg(developerCyan);
        break;
      case "purple":
        setCurrentImg(developerPurple);
        break;
      default:
        setCurrentImg(developerOrange);
        break;
    }
  }, [colorsContext]);

  return (
    <img className="developer-img" src={currentImg} alt="developer picture" />
  );
};

export default DeveloperImg;
