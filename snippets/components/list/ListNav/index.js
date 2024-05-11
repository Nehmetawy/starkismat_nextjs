import css from "./css.module.css";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";

export default function ListNav({ pageno = 1, nav = () => {} }) {
  return (
    <div className={css.cont}>
      <div className={css.flex}>
        <div
          className={css.iconCont}
          onClick={() => {
            nav(-1);
          }}>
          <LuArrowLeftSquare size={20} />
        </div>
        <div className={css.textCont}>{pageno}</div>
        <div
          className={css.iconCont}
          onClick={() => {
            nav(1);
          }}>
          <LuArrowRightSquare size={20} />
        </div>
      </div>
    </div>
  );
}
