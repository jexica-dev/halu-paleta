import React from "react";
import halohalo from "../../images/halohalo.png";
import "../HomeDual/HaluHalf.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../P5/sketchHalu.js";

export default function HaluHalf() {
  return (
    <div className="star-cursor overflow-hidden w-full h-full relative bg-yellow">
      <ReactP5Wrapper sketch={sketch} />
      <img
        src={halohalo}
        alt="halo halo ice cream"
        className=" absolute bottom-0 left-0 -ml-16 -mb-20 w-5/6"
      />
    </div>
  );
}
