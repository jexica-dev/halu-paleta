// import paleta from "../../images/paleta-90.png";
import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../P5/sketchPaleta.js";
import paletaLogo from "../../images/paletapop.svg";
import { Link } from "react-router-dom";

export default function PaletaHalf() {
  return (
    <div className="w-full h-full relative">
      <div className="star-cursor overflow-hidden w-full h-full relative bg-yellow">
        <ReactP5Wrapper
          className=" z-50 -mt-50 bg-transparent"
          sketch={sketch}
        />
        <div className=" absolute w-full h-full bottom-0 z-50 grid grid-rows-1 justify-center content-end">
          <Link className="self-end mb-10" to="/Paletapop">
            <img
              src={paletaLogo}
              className=""
              // style={{ position: "absolute", top: "0" }}
              alt="logo"
              srcset=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
