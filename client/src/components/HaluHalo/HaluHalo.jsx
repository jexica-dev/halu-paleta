import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import HaloNav from "./HaloNav";
import sketchHex from "../HaluHalo/sketchHaloHex.js";

export default function HaluHalo() {
  return (
    <div className="w-screen h-full">
      <div className="bg-yellow w-screen h-screen fixed top-0" />
      <HaloNav />
      <div className="overflow-hidden h-screen fixed bottom-0">
        <ReactP5Wrapper sketch={sketchHex} />
      </div>
    </div>
  );
}
