import React from "react";
import { Link } from "react-router-dom";
import haloLogo from "../../images/halulogo.svg";
import haloAbout from "../../images/halu-about.svg";
import haloCreate from "../../images/halu-create.svg";
import haloFave from "../../images/halu-faves.svg";
import { useState } from "react";
import Halo from "../../images/halohalo.png";
import HaluModal from "./HaluModal";

export default function HaloNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    body: "",
  });

  return (
    <>
      <div className="relative z-50">
        <div
          style={{ zIndex: "10" }}
          className={
            !modalOpen
              ? "hidden w-screen h-screen fixed"
              : "w-screen h-screen fixed  "
          }
        >
          <div
            style={{ zIndex: "50" }}
            className={
              !modalOpen
                ? "hidden w-screen h-screen fixed"
                : "w-screen h-screen fixed bg-black opacity-70 filter "
            }
          ></div>
          <div
            className={
              !modalOpen
                ? "hidden"
                : " fixed  w-screen h-screen bg-trp z-50 grid grid-cols-1 place-content-center items-center"
            }
          >
            <div className="fixed  w-140 h-132 place-self-center bg-white  rounded-3xl">
              {!modalOpen ? null : (
                <>
                  <div className="w-full relative ">
                    <button
                      onClick={() => {
                        setModalOpen(false);
                      }}
                      className=" px-4 py-2 font-whyteinktrap font-semibold text-lg absolute top-0 right-0 rounded-tr-[23px] rounded-bl-[20px] pb-3 hover:bg-red hover:text-black"
                    >
                      close
                    </button>
                  </div>
                  <HaluModal modalData={modalData} />
                </>
              )}
            </div>
          </div>
        </div>
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
            <img
              onClick={() => {
                setModalData({
                  title: "Newest Ingredients: Pandan Jelly",
                  body: (
                    <>
                      <div className="  flex flex-col  w-full place-content-center">
                        {/* <img src={Halo} alt="" width={350} /> */}
                      </div>
                    </>
                  ),
                });
                setModalOpen((prevState) => !prevState);
              }}
              className="cursor-pointer ml-10"
              src={haloAbout}
              alt=""
              srcset=""
            />
            <img
              onClick={() => {
                setModalData({
                  title: "Create Your HaluHalo",
                  body: (
                    <>
                      <div className=" flex flex-col  w-full place-content-center">
                        {/* <img src={Halo} alt="" width={350} />{" "} */}
                      </div>
                    </>
                  ),
                });
                setModalOpen((prevState) => !prevState);
              }}
              style={{ width: "900px" }}
              className="-mt-3 z-10 cursor-pointer"
              src={haloCreate}
              alt=""
              srcset=""
            />
            <img
              onClick={() => {
                setModalData({
                  title: "Favorite Toppings",
                  body: (
                    <>
                      <div className="flex flex-col  w-full place-content-center"></div>
                    </>
                  ),
                });
                setModalOpen((prevState) => !prevState);
              }}
              className=" -mt-8 w-40 ml-40 cursor-pointer"
              src={haloFave}
              x
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
