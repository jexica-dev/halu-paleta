import React from "react";
import PaletaBg from "./PaletaBg";
import PaletaNav from "./PaletaNav";

export default function PaletaPop() {
  return (
    <>
      <div className="w-screen h-screen">
        <PaletaNav />
        <PaletaBg />
      </div>
    </>
  );
}
