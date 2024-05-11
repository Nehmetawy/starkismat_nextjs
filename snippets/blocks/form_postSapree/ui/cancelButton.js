import css from "./css.module.css";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Cancel({ onClick }) {
  return (
    <div className={css.cancelCont} onClick={onClick}>
      <FaRegCircleXmark size={18} />
    </div>
  );
}
