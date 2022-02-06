import React, { useState, useEffect } from "react";
import "./ThemeToggler.scss";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ThemeToggler = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
  
      const root = document.documentElement;
      if(isDarkTheme){
        root.setAttribute('data-theme' , 'dark');
      }else{
        root.removeAttribute('data-theme');
        //this will apply the default root which is light theme
      }
  
    }, [isDarkTheme]);

    const themeTogglerHanlder = () => {
        setIsDarkTheme((prevState) => !prevState);
      };

  return (
    <div className='theme-checkbox' onClick={themeTogglerHanlder}>
      <BsMoonFill className="theme-checkbox__moon"/>
      <BsSunFill className="theme-checkbox__sun"/>
      <span className={`theme-checkbox__ball ${isDarkTheme? 'dark' : ''}`}></span>
    </div>
  );
};

export default ThemeToggler;
