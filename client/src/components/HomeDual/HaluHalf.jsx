import React from "react";

// import halohalo from "../../images/halohalo.png";
import "../HomeDual/HaluHalf.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../P5/sketchHalu.js";
import haluLogo from "../../images/halulogo.svg";
import { Link } from "react-router-dom";

export default function HaluHalf() {
  return (
    <div className="star-cursor overflow-hidden w-full h-full relative bg-transparent">
      <div className="absolute top-0">
        <ReactP5Wrapper className=" -mt-50 bg-transparent" sketch={sketch} />
      </div>
      <Link to="/Haluhalo">
        <img
          src={haluLogo}
          className="absolute bottom-0 left-10 hover:filter hover:bg-blend-exclusion"
          // style={{ position: "absolute", top: "0" }}
          alt="logo"
          srcset=""
        />
      </Link>
    </div>
  );
}
