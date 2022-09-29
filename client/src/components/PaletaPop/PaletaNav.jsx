import React, { useState } from "react";
import PaletaModal from "./PaletaModal";
import paleta from "../../images/paleta.png";
import PaletaSocial from "./PaletaSocial";

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
                <div className="w-full relative ">
                  <button
                    onClick={() => {
                      setModalOpen(false);
                    }}
                    className=" px-4 py-2 font-whyteinktrap font-semibold text-lg absolute top-0 right-0 rounded-tr-[23px] rounded-bl-[20px] pb-3 hover:bg-pink-300 hover:text-black"
                  >
                    close
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
              title: "Seasonal Flavor: Horchata Marias",
              body: (
                <>
                  {" "}
                  <img
                    src="https://twemoji.maxcdn.com/v/latest/svg/1f509.svg"
                    alt=""
                    width={30}
                  />{" "}
                </>
              ),
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
                    <div className="w-full h-96 pt-5 px-3">
                      <form className="">
                        <div className="grid grid-cols-7 place-content-center text-lg">
                          <select className="col-span-3  bg-white px-4 leading-tight border border-black hover:bg-pink-300 hover:text-white">
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
                          <div className="col-span-2 text-center p-3 border border-black hover:bg-pink-300 hover:text-white ">
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
              title: "Our Story",
              body: (
                <>
                  <div className=" text-xl leading-snug">
                    At{" "}
                    <span className="text-pink-400 font-bold italic">
                      ¡Paleta Pop!
                    </span>
                    , we’re bringing organic Mexican paletas from our kitchen to
                    yours!
                    <br className="mb-2" />
                    Reconnecting and hybridizing our family recipes, each paleta
                    is lovingly made with the intention to combine the highest
                    quality ingredients into a flavorful, frozen delicacy.
                    <br className="mb-2" />
                    All produce are grown and sourced locally. Our paletas are
                    changed seasonally and uniquely created by our family.
                    <br className="mb-2" />
                    Order online for pickup or delivery within a 5-mile radius
                    our Brooklyn location.
                    <br className="mb-2" />
                    Connect with us over social media and share PaletaPop!
                    <PaletaSocial />
                  </div>
                </>
              ),
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
