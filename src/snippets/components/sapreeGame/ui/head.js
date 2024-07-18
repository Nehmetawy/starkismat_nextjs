import css from "./css.module.css";
import { TbTrophy } from "react-icons/tb";

export default function HI() {
  return (
    <div className={css.headGrid}>
      <div className={css.headFlex}>
        <TbTrophy size={18} />
        <div className={css.text}>Period</div>
      </div>
      <div className={css.headFlex}>
        <div className={css.text}>Count Down</div>
      </div>
    </div>
  );
}
