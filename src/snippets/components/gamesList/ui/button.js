import css from "./css.module.css";
import { FaLocationArrow } from "react-icons/fa";

export default function Button({ id = "", click = () => {} }) {
  const ping = () => {
    click(id);
  };
  return (
    <div className={css.button} onClick={ping}>
      <FaLocationArrow />
    </div>
  );
}
