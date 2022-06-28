import react, { useState } from "react";

const ColorsContext = react.createContext({
  currentColor: {},
  isCurrentThemeDark: false,
  changeColor: () => {},
});

export const ColorsContextProvider = (props) => {

    const [currentColor, setCurrentColor] = useState({color:"#FF8801" , name: 'orange'});//orange
    const [isCurrentThemeDark, SetIsCurrentThemeDark] = useState(false);//default theme is light

    const changeColor = ({currentColor, isCurrentThemeDark }) => {
        setCurrentColor(currentColor);
        SetIsCurrentThemeDark(isCurrentThemeDark);
    }

    const contextValue = {
        currentColor,
        changeColor,
        isCurrentThemeDark
    }

  return <ColorsContext.Provider value={contextValue}>
            {props.children}
        </ColorsContext.Provider>;
};

export default ColorsContext;
