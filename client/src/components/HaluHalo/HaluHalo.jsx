import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import HaloNav from "./HaloNav";
import sketchHex from "../HaluHalo/sketchHaloHex.js";
// import "../HaluHalo/HaluHalo.css";

export default function HaluHalo() {
  return (
    <div className="w-screen h-full cursor-halo">
      <div className="bg-yellow w-screen h-screen fixed top-0 pointer-events-none" />
      <div className="z-50">
        <HaloNav />
      </div>
      <div className="overflow-hidden h-screen fixed bottom-0 pointer-events-none">
        <ReactP5Wrapper sketch={sketchHex} />
      </div>
    </div>
  );
}
