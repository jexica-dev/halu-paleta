import React from "react";
import halohalo from "../../images/halohalo.png";

export default function HaluHalf() {
  return (
    <div className="w-full h-full relative bg-yellow-400">
      <div>
        <img
          src={halohalo}
          alt="halo halo ice cream"
          className=" absolute inset-x-0 bottom-0 w-full sm:w-screen md:w-full lg:w-full"
        />
      </div>
    </div>
  );
}
