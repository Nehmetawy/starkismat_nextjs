import css from "./css.module.css";
import { TbCheck, TbCircleLetterX } from "react-icons/tb";

const classDestro = {
  default: `${css.button}`,
  loading: `${css.button} ${css.onClick}`,
  success: `${css.button} ${css.success}`,
  error: `${css.button} ${css.error}`,
};

export default function Button({
  text = "Submit",
  click = () => {},
  id = "",
  state = "default",
}) {
  function ping() {
    if (state === "default") click("", id);
  }

  const className = classDestro[state] || classDestro["default"];

  return (
    <div className={css.cont}>
      <div className={className} onClick={ping}>
        {state === "default" && text}
        {state === "success" && <TbCheck size={20} />}
        {state === "error" && <TbCircleLetterX size={20} />}
      </div>
    </div>
  );
}
