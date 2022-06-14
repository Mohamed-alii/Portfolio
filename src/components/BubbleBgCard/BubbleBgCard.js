import React, { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineWeb } from 'react-icons/md';
import "./BubbleBgCard.scss";

const BubbleBgCard = ({ image, bgColor, children, githubUrl, liveUrl }) => {

    const bubbleRef = useRef();
    const cardRef = useRef();

    const contentMouseEnterHandler = (e) => {
        const spanOffsetLeft = e.pageX;
        const spanOffsetTop = e.pageY;
        
        const cardOffsetLeft = cardRef.current.offsetLeft;
        const cardOffsetTop = cardRef.current.offsetTop;

        const mousePositionX = spanOffsetLeft -  cardOffsetLeft;
        const mousePositionY = spanOffsetTop -  cardOffsetTop;
        //setting top and left to spread to the point where the mouse entered 
        bubbleRef.current.style.top = `${mousePositionY}px`;
        bubbleRef.current.style.left = `${mousePositionX}px`;
        bubbleRef.current.style.backgroundColor = bgColor;
    }

    const contentMouseLeaveHandler = (e) => {
        const spanOffsetLeft = e.pageX;
        const spanOffsetTop = e.pageY;

        const cardOffsetLeft = cardRef.current.offsetLeft;
        const cardOffsetTop = cardRef.current.offsetTop;

        const mousePositionX = spanOffsetLeft -  cardOffsetLeft;
        const mousePositionY = spanOffsetTop -  cardOffsetTop;
        //setting top and left to collapse from the point where the mouse left 
        bubbleRef.current.style.top = `${mousePositionY}px`;
        bubbleRef.current.style.left = `${mousePositionX}px`;
    }

  return (
    <div className="card" ref={cardRef} onMouseEnter={contentMouseEnterHandler} onMouseLeave={contentMouseLeaveHandler}>
      <span className="card__bubble" ref={bubbleRef}></span> {/* bubble */}

      { image && 
      (<div className="card__img-wrapper">
        <img src={image} />
      </div>)}

      <div className="card__content">
        {children}
      </div>

      <div className="card__content-overlay">
        <div className="card__content-overlay__container">
            <div className="card__content-overlay__icon-container">
              <a href={githubUrl} target="_blanck">
                <BsGithub className="card__content-overlay__icon" size={40}/>
                <p>Github</p>
                <p>repo</p>
              </a>
              <a href={liveUrl} target="_blanck">
                <MdOutlineWeb className="card__content-overlay__icon" size={48}/>
                <p>Live</p>
              </a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default BubbleBgCard;
