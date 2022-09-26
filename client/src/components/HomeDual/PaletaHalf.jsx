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

        <Link to="/Paletapop">
          <img
            src={paletaLogo}
            className="absolute bottom-0 left-10 hover:filter hover:bg-blend-exclusion"
            // style={{ position: "absolute", top: "0" }}
            alt="logo"
            srcset=""
          />
        </Link>
      </div>
    </div>
  );
}
