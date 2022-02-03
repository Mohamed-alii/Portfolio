import React, { useRef } from "react";
import './SpinningBorder.scss'

const SpinningBorder = ({children, bgColor = 'white'}) => {

    const spinningBorderRef = useRef();
    const spinningBorderContentRef = useRef();

    if(spinningBorderContentRef.current){
        spinningBorderContentRef.current.style.backgroundColor = bgColor;
    }


  return (
    <div className="spinning-border" ref={spinningBorderRef}>
      <div className="spinning-border__content" ref={spinningBorderContentRef}>
          {children}
      </div>
    </div>
  );
};

export default SpinningBorder;