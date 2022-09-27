import React from "react";
import { Link } from "react-router-dom";
import paletaBg from "../../images/paleta.png";
import paletaLogo from "../../images/paletapop.svg";

export default function PaletaBg() {
  return (
    <div className="relative w-screen h-screen bg-prp overflow-hidden">
      <Link to="/" exact>
        <img
          src={paletaLogo}
          className="absolute z-40 right-10 bottom-10"
          alt=""
          srcset=""
        />
      </Link>

      <img
        style={{ opacity: ".75" }}
        className=" w-screen "
        src={paletaBg}
        alt=""
      />
    </div>
  );
}
