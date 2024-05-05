import css from "./main.module.css";
import Lottie from "../../lottie";
import ListRow from "./list";
import HeadRow from "./head";

export default function LIST() {
  return (
    <div className={css.listcont}>
      <HeadRow />
      <div className={css.listBox}>
        {/* <Lottie /> */}
        {/* <ListRow /> */}
      </div>
    </div>
  );
}
