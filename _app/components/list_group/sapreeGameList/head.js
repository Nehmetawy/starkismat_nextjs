import css from "./css.module.css";
import { BsDatabaseGear } from "react-icons/bs";
export default function ListHead({
  Icon = BsDatabaseGear,
  text = "Title",
  showError = false,
  onClick = () => {},
}) {
  const className = showError
    ? `${css.listHeadCont} ${css.active}`
    : css.listHeadCont;
  return (
    <div className={className} onClick={onClick}>
      <div className={css.headFlex}>
        <Icon size={18} />
        <div className={css.headText}>{text}</div>
      </div>
    </div>
  );
}
