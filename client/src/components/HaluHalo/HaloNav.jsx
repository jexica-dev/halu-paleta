import React from "react";
import { Link } from "react-router-dom";
import haloLogo from "../../images/halulogo.svg";
import haloAbout from "../../images/halu-about.svg";
import haloCreate from "../../images/halu-create.svg";
import haloFave from "../../images/halu-faves.svg";

export default function HaloNav() {
  return (
    <>
      <div className="z-50">
        <Link to="/" exact>
          <img
            className="absolute top-10 right-10"
            src={haloLogo}
            alt=""
            srcset=""
          />
        </Link>
        <div className="absolute right-0 pt-72">
          <div className=" flex flex-col w-80 ">
            <img className=" ml-10" src={haloAbout} alt="" srcset="" />
            <img
              style={{ width: "900px" }}
              className="-mt-3 z-10"
              src={haloCreate}
              alt=""
              srcset=""
            />
            <img
              className=" -mt-8 w-40 ml-40"
              src={haloFave}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
