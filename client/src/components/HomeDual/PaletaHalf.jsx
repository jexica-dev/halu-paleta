// import paleta from "../../images/paleta-90.png";
import React, { useEffect, useState } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "../P5/sketchPaleta.js";

export default function PaletaHalf() {
  return (
    <div className="w-full h-full relative">
      <div className="star-cursor overflow-hidden w-full h-full relative bg-yellow">
        <ReactP5Wrapper
          className=" z-50 -mt-50 bg-transparent"
          sketch={sketch}
        />
      </div>
    </div>
  );
}
