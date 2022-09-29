import { Link } from "react-router-dom";

export default function PaletaModal(props) {
  return (
    <div className="p-5 overflow-y-scroll flex flex-col">
      <p className=" text-center font-Prophet font-bold text-5xl pb-2">
        {props.modalData.title}
      </p>

      <p className="pt-2 px-2 text-sm text-left font-monument p-b1">
        {props.modalData.body}
      </p>
    </div>
  );
}
