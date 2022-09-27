import { Link } from "react-router-dom";


export default function PaletaModal(props) {
  return (
    <div className="p-5 overflow-y-scroll">
      <p className=" text-left font-whyteinktrap lg:text-3xl pb-2">
        {props.modalData.title}
     </p>

      <p className="pt-2 px-2 text-sm text-left font-monument">
        {props.modalData.body}
      </p>
    </div>
  );
}
