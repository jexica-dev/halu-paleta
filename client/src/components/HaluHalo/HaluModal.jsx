import React from "react";

export default function HaluModal(props) {
  return (
    <div style={{ zIndex: 100 }} className=" text-indigo-800 z-50">
      <p className=" text-center font-whyteinktrap font-bold text-5xl py-10 ">
        {props.modalData.title}
      </p>

      <p className="  text-sm text-left font-whyteinktrap pb-1 px-5">
        {props.modalData.body}
      </p>
    </div>
  );
}
