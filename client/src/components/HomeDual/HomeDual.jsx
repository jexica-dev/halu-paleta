import React from "react";
import HaluHalf from "./HaluHalf";
import PaletaHalf from "./PaletaHalf";

export default function HomeDual() {
  return (
    <div className=" w-screen h-screen ">
      <div className=" inset-x-0 bottom-0 h-full absolute lg:inset-x-0 lg:w-1/2 lg:h-full lg:float-left sm:mb-1 ">
        <HaluHalf />
      </div>

      <div className=" lg:w-1/2 lg:h-full lg:float-right w-full h-1/2 sm:mb-1 ">
        <PaletaHalf />
      </div>
    </div>
  );
}
