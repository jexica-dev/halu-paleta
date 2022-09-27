import React, { useState } from "react";
import PaletaModal from "./PaletaModal";

export default function PaletaNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    body: "",
  });

  return (
    <div className="relative z-50">
      <div
        style={{ zIndex: "100" }}
        onClick={() => {
          setModalOpen(false);
        }}
        className={
          !modalOpen
            ? "hidden w-screen h-screen fixed"
            : "w-screen h-screen fixed   "
        }
      >
        <div
          style={{ zIndex: "50" }}
          className={
            !modalOpen
              ? "hidden w-screen h-screen fixed"
              : "w-screen h-screen fixed bg-black opacity-90 filter blur-2xl"
          }
        ></div>
        <div
          className={
            !modalOpen
              ? "hidden"
              : " fixed  w-screen h-screen bg-trp z-50 grid grid-cols-1 place-content-center items-center"
          }
        >
          <div className="fixed  place-self-center   bg-white w-96 h-96">
            {!modalOpen ? null : <PaletaModal modalData={modalData} />}
          </div>
        </div>
      </div>

      <div className=" absolute top-0 left-0 grid grid-cols-1 gap-4 ml-5 mt-5">
        <div
          className="cursor-pointer w-28 h-28  rounded-full border-[13px] bg-emerald-600  border-rose-900 text-4xl "
          onClick={() => {
            setModalData({
              title: "About",
              body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis est esse labore eius ipsum aliquam praesentium obcaecati numquam perferendis culpa.
            `,
            });
            setModalOpen((prevState) => !prevState);
          }}
        >
          <span className="relative top-7 left-7 ">
            <img
              src="https://twemoji.maxcdn.com/v/latest/svg/1f509.svg"
              alt=""
              width={30}
            />
          </span>
        </div>
        <div
          className="cursor-pointer w-28 h-28 rounded-full border-[13px] border-green-300 bg-yellow text-4xl"
          onClick={() => {
            setModalData({
              title: "Shop",
              body: `
              Favorite Flavors
              

                `,
            });
            setModalOpen((prevState) => !prevState);
          }}
        >
          <span className="relative top-6 left-6">
            <img
              src="https://twemoji.maxcdn.com/v/latest/svg/1f6d2.svg"
              alt=""
              width={35}
            />
          </span>
        </div>
        <div
          className=" cursor-pointer w-28 h-28  rounded-full border-[13px] border-indigo-500 bg-pink-300 text-4xl"
          onClick={() => {
            setModalData({
              title: "About ¡Paleta Pop!",
              body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis est esse labore eius ipsum aliquam praesentium obcaecati numquam perferendis culpa.
              `,
            });
            setModalOpen((prevState) => !prevState);
          }}
        >
          <span className="relative top-7 left-7">
            <img
              src="https://twemoji.maxcdn.com/v/latest/svg/1f4ac.svg"
              alt=""
              width={30}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
