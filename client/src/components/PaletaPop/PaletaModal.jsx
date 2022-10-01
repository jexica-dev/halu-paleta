import { Link } from "react-router-dom";

export default function PaletaModal(props) {
  return (
    <div className="p-5 overflow-y-scroll flex flex-col">
      <p className=" text-center font-whyteinktrap  text-5xl py-3 ">
        {props.modalData.title}
      </p>

      <p className="  text-sm text-left font-whyteinktrap pb-1 px-5">
        {props.modalData.body}
      </p>
    </div>
  );
}
