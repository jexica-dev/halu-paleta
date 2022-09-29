import React, { useState } from "react";
import PaletaModal from "./PaletaModal";
import paleta from "../../images/paleta.png";

export default function PaletaNav() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    body: "",
  });

  let count = 1;

  return (
    <div className="relative z-50">
      <div
        style={{ zIndex: "10" }}
        // onClick={() => {
        //   setModalOpen(true);
        // }}
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
                <div className="w-full justify-end">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    className="text-right"
                  >
                    x
                  </button>
                </div>
                <PaletaModal modalData={modalData} />
              </>
            )}
          </div>
        </div>
      </div>

      <div className=" absolute top-0 left-0 grid grid-cols-1 gap-4 ml-5 mt-5">
        <div
          className="cursor-pointer w-28 h-28  rounded-full border-[13px] bg-emerald-600  border-rose-900 text-4xl "
          onClick={() => {
            setModalData({
              title: "Welcome!",
              body: `
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
              title: "Order Paletas",
              body: (
                <>
                  <div className="">
                    <img className="w-128" src={paleta} alt="" width="100%" />
                    <div className="w-full h-96 pt-3 px-3">
                      <form className="">
                        <div className="grid grid-cols-7 place-content-center">
                          <select
                            placeholder="Flavors"
                            className="col-span-3  bg-white px-4 leading-tight border border-black"
                          >
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Strawberry Lime</option>
                            <option value="horchata">Horchata Marias</option>
                            <option value="mango">Spicy Mango</option>
                            <option value="coconut">Coconut</option>
                          </select>
                          {/* <div className="grid grid-rows-2"> */}
                          <input
                            className="text-center p-3 border border-black "
                            type="text"
                            placeholder="1"
                          />
                          {/* <div className="w-10 h-10 grid grid-cols-1">
                              <div className=" text-center  border border-black hover:bg-black hover:text-white ">
                                +
                              </div>
                              <div className=" text-center  border border-black hover:bg-black hover:text-white ">
                                -
                              </div>
                            </div>
                          </div> */}
                          <div className="col-span-2 text-center p-3 border border-black hover:bg-black hover:text-white ">
                            Add to Cart
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
