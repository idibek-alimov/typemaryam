import React, { useState } from "react";
import "./Scroll.css";
import { CSSTransition } from "react-transition-group";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Scroll = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="slide-page">
      <div
        className="left-slide slide-button"
        onClick={(event) => {
          if (currentImage === 0) {
            setCurrentImage(2);
          } else {
            setCurrentImage(currentImage - 1);
          }
        }}
      >
        <AiOutlineArrowLeft />
      </div>
      <div className="scroll-box">
        <div className="scroller">
          {["ad1.jpg", "ad2.jpg", "ad3.jpg"].map((image, id) => {
            return (
              <div className="scroller">
                <ScrollItem id={id} currentImage={currentImage}>
                  {image}
                </ScrollItem>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="right-slide slide-button"
        onClick={(event) => {
          if (currentImage === 2) {
            setCurrentImage(0);
          } else {
            setCurrentImage(currentImage + 1);
          }
        }}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Scroll;
type Props = {
  id: number;
  currentImage: number;
  children: string;
};

const ScrollItem = ({ id, currentImage, children }: Props) => {
  //   const [currentImage, setCurrentImage] = useState(0);
  return (
    <CSSTransition
      in={currentImage === id}
      unmountOnExit
      timeout={500}
      classNames="first"
    >
      <div className="scroll-item">
        <Link to="#">
          <img src={children} alt="desert.jpg" />
        </Link>
      </div>
    </CSSTransition>
  );
};
