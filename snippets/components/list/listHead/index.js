import css from "./css.module.css";
import { BsDatabaseGear } from "react-icons/bs";

export default function ListHead({
  Icon = BsDatabaseGear,
  text = "title",
  click = () => {},
  children,
}) {
  return (
    <div className={css.ListHeadContainer} onClick={click}>
      <div className={css.headFlex}>
        <Icon size={18} />
        <div className={css.headText}>{text}</div>
      </div>
      {children}
    </div>
  );
}
