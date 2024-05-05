import css from "./main.module.css";
import { BsDatabaseGear } from "react-icons/bs";

export default function LIST({ text = "Redeam", isBox = false, onClick, id }) {
  const className = isBox ? css.listHeadContB : css.listHeadCont;
  return (
    <div className={className} onClick={() => onClick(id)}>
      <div className={css.headFlex}>
        <div className={css.headText}>{text}</div>
      </div>
    </div>
  );
}
