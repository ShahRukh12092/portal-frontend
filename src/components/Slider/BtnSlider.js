import React from "react";
import "./Slider.css";
import left from "./icons/left.svg";
import right from "./icons/right.svg";
export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? right : left} alt="arrows" />
    </button>
  );
}
