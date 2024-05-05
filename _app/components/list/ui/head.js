import css from "./main.module.css";
import { BsDatabaseGear } from "react-icons/bs";

export default function LIST() {
  return (
    <div className={css.listHeadCont}>
      <div className={css.headFlex}>
        <BsDatabaseGear size={18} />
        <div className={css.headText}>Game Records</div>
      </div>
    </div>
  );
}
