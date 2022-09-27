import React from "react";

export default function PaletaNav() {
  return (
    <div className="relative z-50">
      <div className=" absolute top-0 left-0 grid grid-cols-1 gap-4 ml-5 mt-5">
        <div className=" w-28 h-28  rounded-full border-[13px] bg-emerald-500  border-rose-900 text-4xl ">
          <span className="relative top-5">📣</span>
        </div>
        <div className=" w-28 h-28  rounded-full border-[13px] border-green-300 bg-yellow text-4xl ">
          <span className="relative top-5">🛒</span>
        </div>
        <div className=" w-28 h-28  rounded-full border-[13px] border-indigo-500 bg-pink-300 text-4xl ">
          <span className="relative top-5">💬</span>
        </div>
      </div>
    </div>
  );
}
