import React from "react";
import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import twitter from "../../images/twitter.png";

export default function PaletaSocial() {
  return (
    <div className="w-full mt-1 ">
      <div className="flex flex-row ">
        <img
          className="mr-3 hover:filter cursor-pointer hover:bg-teal-400  hover:invert"
          src={fb}
          alt=""
          width={20}
        />
        <img
          className="mr-3 hover:filter cursor-pointer hover:bg-teal-400  hover:invert"
          src={ig}
          alt=""
          width={20}
        />
        <img
          className="mr-3 hover:filter cursor-pointer hover:bg-teal-400  hover:invert"
          src={twitter}
          alt=""
          width={20}
        />
      </div>
    </div>
  );
}
