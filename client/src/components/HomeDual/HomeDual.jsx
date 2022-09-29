import React from "react";
import HaluHalf from "./HaluHalf";
import PaletaHalf from "./PaletaHalf";

export default function HomeDual() {
  return (
    <div className=" w-screen h-screen ">
      <div className="relative inset-0 bottom-0 h-full lg:absolute lg:inset-x-0 lg:w-1/2 lg:h-full lg:float-left md:w-1/2 md:h-full md:float-left sm:w-full sm:h-128 ">
        {/* <img src={halulogo} alt="" srcset="" /> */}
        <HaluHalf />
      </div>

      <div className=" lg:w-1/2 lg:h-full lg:float-right md:w-1/2 md:h-full md:float-left sm:w-full sm:h-28 ">
        <PaletaHalf />
      </div>
    </div>
  );
}
