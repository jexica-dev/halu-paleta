import React from "react";
import halohalo from "../../images/halohalo.png";

export default function HaluHalf() {
  return (
    <div className=" overflow-hidden w-full h-full relative bg-yellow">
      <img
        src={halohalo}
        alt="halo halo ice cream"
        className=" absolute bottom-0 left-0 -ml-16 -mb-20 w-5/6"
      />
    </div>
  );
}
