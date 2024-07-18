import css from "./css.module.css";
import { TfiGift } from "react-icons/tfi";
import { BetOnButton } from "./buttonRender";

export default function SapreeLiveItem({ item = {}, ping = () => {} }) {
  const { betid = 0, amount = 0, onid = 0 } = item;

  return (
    <div className={css.itemBox}>
      <div className={css.itemCont}>
        <BetOnButton onid={onid} />
        <div className={css.betid}>{betid}</div>
        <div className={css.amount}>{amount}</div>
        <div
          className={css.iconButton}
          onClick={() => {
            ping(item, "get_result");
          }}>
          <TfiGift size={18} />
        </div>
      </div>
    </div>
  );
}
