import css from "./css.module.css";
import { TfiGift } from "react-icons/tfi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TbCoinRupee } from "react-icons/tb";
import Lottie from "../../lottie";

export default function ListItem({ item = {} }) {
  const {
    betid = "2014555216",
    amount = 45,
    claimed = true,
    status = true,
  } = item;

  return (
    <div>
      <div className={css.itemCont}>
        <div>{betid}</div>
        <div>₹{amount}</div>
        {/* 2-3 things. I need to animate this */}
        {claimed && <StatusText status={status} />}

        {!claimed && (
          <div className={css.iconButton}>
            <TfiGift size={18} />
          </div>
        )}

        {/* <div>
          <div className={css.loadingIcon}></div>
        </div> */}
      </div>
      {/* <div className={css.confittiContainer}>
        <Lottie anim="confitti" />
      </div> */}
    </div>
  );
}

function StatusText({ status = false }) {
  const text = status ? "Success" : "Fail";
  const className = status ? css.statusSuccess : css.statusFail;
  return <div className={className}>{text}</div>;
}

function NotClaimed() {
  return (
    <div className={css.iconButton}>
      <TfiGift size={18} />
    </div>
  );
}
/**

  what do i need to animate i this.
  2 conditions
  1- claimed = true
    => show infor
  2- claimed = false
    => show gift card
    => loading state
    => winner or looser

*/
