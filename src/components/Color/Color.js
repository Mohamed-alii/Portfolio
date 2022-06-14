import React, { useLayoutEffect, useRef, useContext } from 'react';
import ColorsContext from '../../store/colors-store';
import './Color.scss';

const Color = ( { color:{ color, name } } ) => {

    const colorRef = useRef();
    const colorsContext = useContext(ColorsContext);

    useLayoutEffect(() => {
        if(colorRef){
            // assign the background color of the icon
            colorRef.current.style.backgroundColor = color;
        }
    }, []);

    const pickColorHandler = () => {
        const root = document.documentElement;
        const currentColor = {color , name};
        root.style.setProperty('--helpers-success' , color);
        colorsContext.changeColor({
            ...colorsContext ,
            currentColor: currentColor
        });
    }
    
  return <div className='color' ref={colorRef} onClick={pickColorHandler}></div>;
};

export default Color;