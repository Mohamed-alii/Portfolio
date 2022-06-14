import React, { useState, useLayoutEffect, useContext } from "react";
import "./ThemeToggler.scss";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import ColorsContext from '../../store/colors-store';

const ThemeToggler = () => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const colorsCxt = useContext(ColorsContext);

    useLayoutEffect(() => {
  
      const root = document.documentElement;
      if(isDarkTheme){
        root.setAttribute('data-theme' , 'dark');
        colorsCxt.changeColor({
          ...colorsCxt,
          isCurrentThemeDark: true
        })
      }else{
        root.removeAttribute('data-theme');
        colorsCxt.changeColor({
          ...colorsCxt,
          isCurrentThemeDark: false
        })
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
