import paleta from "../../images/paleta-90.png";
import React, { useEffect, useState } from "react";

export default function PaletaHalf() {
  return (
    <div className="w-full h-full relative">
      <img
        src={paleta}
        alt="paleta ice cream"
        className=" absolute inset-x-0 bottom-0 w-full sm:w-screen md:w-full lg:w-full"
      />
    </div>
  );
}
