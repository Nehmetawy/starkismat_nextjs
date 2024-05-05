import css from "./css.module.css";
import { TbCircleHalf } from "react-icons/tb";
export default function ErrorCard({ text = "Error" }) {
  return (
    <div className={css.container}>
      <div className={css.iconCont}>
        <TbCircleHalf size={18} />
      </div>
      <div className={css.textCont}>{text}</div>
    </div>
  );
}
