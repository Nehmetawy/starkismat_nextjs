import { useState } from "react";
import { TbCheck } from "react-icons/tb";
import css from "./ui/main.module.css";

const classDestro = {};

export default function BUTTON() {
  const [state, setState] = useState("default");

  function onClick() {
    //
  }

  return (
    <div className={css.tabsCont}>
      <div className={css.button}>Login</div>
      <div className={css.button}>Signup</div>
    </div>
  );
}
