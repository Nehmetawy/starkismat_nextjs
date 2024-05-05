import css from "./main.module.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function LIST() {
  return (
    <div className={css.navCont}>
      <div className={css.navIconItem}>
        <IoIosArrowDropleft size={20} />
      </div>
      <div className={css.navTextItem}>45</div>
      <div className={css.navIconItem}>
        <IoIosArrowDropright size={20} />
      </div>
    </div>
  );
}
