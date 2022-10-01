import React from "react";
import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import twitter from "../../images/twitter.png";

export default function PaletaSocial() {
  return (
    <div className="w-full mt-1 relative">
      <div className="flex flex-row absolute right-10">
        <div className="">
          <img
            className="mr-7 hover:filter cursor-pointer bg-teal-600 rounded-md invert hover:invert-0 hover:bg-transparent scale-150 w-5 h-5 object-cover"
            src={fb}
            alt=""
            width={15}
          />
        </div>

        <img
          className="mr-7 hover:filter cursor-pointer bg-teal-600 rounded-md invert hover:invert-0 hover:bg-transparent scale-150 w-5 h-5 object-cover "
          src={ig}
          alt=""
          width={15}
        />
        <img
          className="mr-7 hover:filter cursor-pointer bg-teal-600 rounded-md invert hover:invert-0 hover:bg-transparent scale-150 w-5 h-5 object-cover"
          src={twitter}
          alt=""
          width={15}
        />
      </div>
    </div>
  );
}
