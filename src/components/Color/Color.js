import React, { useLayoutEffect, useRef } from 'react';
import './Color.scss';

const Color = ({ color:{ color, name}, colorsHexaArray} ) => {

    const colorRef = useRef();

    useLayoutEffect(() => {
        if(colorRef){
            // assign the color to the background
            colorRef.current.style.backgroundColor = color;
        }
    }, []);

    const pickColorHandler = () => {
        const root = document.documentElement;
        root.style.setProperty('--helpers-success' , color);
    }
    
  return <div className='color' ref={colorRef} onClick={pickColorHandler}></div>;
};

export default Color;