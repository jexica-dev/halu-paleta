import React from "react";
import { Link } from "react-router-dom";
import haloLogo from "../../images/halulogo.svg";
import haloAbout from "../../images/halu-about.svg";
import haloCreate from "../../images/halu-create.svg";
import haloFave from "../../images/halu-faves.svg";
import { useState } from "react";
import Halo from "../../images/halohalo.png";
import HaluModal from "./HaluModal";
import HaloCarousel from "./HaloCarousel";
import pandan from "../../images/pandan.jpg";

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
                  title: "A Tropical, Rainbow Sundae",
                  body: (
                    <>
                      <div className="  flex flex-col w-full items-center">
                        <p className=" text-4xl px-5">
                          A national dessert from the Philippines, we share with
                          you a a modern twist on a national ice cream sundae
                          dessert. We mix the original ingredients with new
                          flavors. Enjoy creating your new halo-halo
                          masterpiece!
                        </p>
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
                        <img
                          className="w-96 h-64 object-cover object-top"
                          src={Halo}
                          alt=""
                          width="100%"
                        />
                        <div className="w-full h-96 pt-5 px-3">
                          <form className="">
                            <div className="grid grid-cols-7 place-content-center text-lg">
                              <select className="col-span-3  bg-white px-4 leading-tight border border-black hover:bg-indigo-600 hover:text-white">
                                <option value="ube">Ube</option>
                                <option value="boba">Mochi</option>
                                <option value="banana">Banana</option>
                                <option value="pandan">Pandan Jelly</option>
                                <option value="coconut">Jackfruit</option>
                                <option value="coconut">Chia Seeds</option>
                                <option value="boba">Sago</option>
                                <option value="coconut">Shaved Ice</option>
                                <option value="coconut">Coconut Flakes</option>
                                <option value="coconut">Gelatin Cubes</option>
                                <option value="coconut">Ganache</option>
                                <option value="coconut">Honey and Cream</option>
                                <option value="coconut">Mangos</option>
                                <option value="coconut">Mung Beans</option>
                                <option value="coconut">Leche Flan</option>
                                <option value="coconut">Condensed Milk</option>
                                <option value="ube">Ube Ice Cream</option>
                                <option value="ube">
                                  Black Sesame Ice Cream
                                </option>
                                <option value="greentea">
                                  Green Tea Ice Cream
                                </option>
                              </select>
                              {/* <div className="grid grid-rows-2"> */}
                              <input
                                className="text-center p-3 border border-black "
                                type="text"
                                placeholder="1"
                              />

                              <div className="col-span-2 text-center p-3 border border-black hover:bg-indigo-600 hover:text-white ">
                                Add to Order
                              </div>
                              <label className=" text-center p-3 border border-black">
                                $4
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  ),
                });
                setModalOpen((prevState) => !prevState);
              }}
              style={{ width: "900px", zIndex: 5 }}
              className="-mt-3 cursor-pointer"
              src={haloCreate}
              alt=""
              srcset=""
            />
            <img
              onClick={() => {
                setModalData({
                  title: "Favorite Combinations",
                  body: (
                    <>
                      <div className="flex flex-col  w-full place-content-center">
                        <HaloCarousel />
                      </div>
                    </>
                  ),
                });
                setModalOpen((prevState) => !prevState);
              }}
              className=" -mt-8 w-40 ml-40 cursor-pointer"
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
