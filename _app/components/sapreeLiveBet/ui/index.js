import css from "./main.module.css";
import { TbGiftFilled } from "react-icons/tb";
import { TfiGift } from "react-icons/tfi";
export default function HI() {
  return (
    <>
      <div className={css.cardCont}>
        <div className={css.text}>20241254554</div>
        <div className={css.simpleFlex}>
          <div className={css.text}>₹45</div>
          <div className={css.iconButton}>
            <TfiGift size={18} />
          </div>
          {/* <div className={css.loader}></div> */}
        </div>
      </div>
    </>
  );
}
