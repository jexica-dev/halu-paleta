import React from "react";

// import halohalo from "../../images/halohalo.png";
import "../HomeDual/HaluHalf.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../P5/sketchHalu.js";
import haluLogo from "../../images/halulogo.svg";
import { Link } from "react-router-dom";

export default function HaluHalf() {
  return (
    <div className=" overflow-hidden w-full h-full relative bg-transparent">
      <div className="absolute top-0">
        <ReactP5Wrapper className=" -mt-50 bg-transparent" sketch={sketch} />
      </div>
      <div className=" absolute w-full h-full bottom-0 z-50 grid grid-rows-1 justify-center content-end">
        <Link className="self-end mb-10" to="/Haluhalo">
          <img
            src={haluLogo}
            className="hover:filter hover:bg-blend-exclusion px-5"
            // style={{ position: "absolute", top: "0" }}
            alt="logo"
            srcset=""
          />
        </Link>
      </div>
    </div>
  );
}
