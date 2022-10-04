import { Link } from "react-router-dom";

export default function PaletaModal(props) {
  return (
    <div style={{ zIndex: 100 }} className=" z-50 overflow-auto h-full py-5">
      <p className=" text-center font-whyteinktrap font-bold text-5xl py-3 ">
        {props.modalData.title}
      </p>
      <p className="  text-sm text-left font-whyteinktrap pb-3 px-5 ">
        {props.modalData.body}
      </p>
    </div>
  );
}
