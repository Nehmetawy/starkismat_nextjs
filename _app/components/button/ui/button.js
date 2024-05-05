import { TbCheck, TbCircleLetterX } from "react-icons/tb";
import css from "./main.module.css";

const classDestro = {
  default: `${css.button}`,
  loading: `${css.button} ${css.onClick}`,
  success: `${css.button} ${css.success}`,
  error: `${css.button} ${css.error}`,
};

export default function BUTTON({ text, commHandle, state, id }) {
  const className = classDestro[state] || classDestro["default"];

  return (
    <div className={css.cont} id={id}>
      <div className={className} onClick={commHandle}>
        {state === "default" && text}
        {state === "success" && <TbCheck size={20} />}
        {state === "error" && <TbCircleLetterX size={20} />}
      </div>
    </div>
  );
}
