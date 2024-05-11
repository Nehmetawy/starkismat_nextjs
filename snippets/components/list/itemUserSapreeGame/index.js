import css from "./css.module.css";
import { useState } from "react";
import { TfiGift } from "react-icons/tfi";

export default function ItemSapreeGame({ item = {} }) {
  const [show, setShow] = useState(false);

  const {
    betid = 451224,
    onid = 5,
    contractamount = false,
    fee = false,
    amount = 12,
    type = false,
    claimed = true,
    status = false,
  } = item;

  // if (!betid) {
  //   return <></>;
  // }
  //
  const toggleShow = () => {
    setShow(!show);
  };

  const makeClaim = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css.itemBox}>
      <div className={css.itemCont} onClick={toggleShow}>
        <div>{betid}</div>
        <Amount claimed={claimed} status={status} amount={amount} />
        <Claimed claimed={claimed} status={status} click={makeClaim} />
      </div>
      <Body item={item} show={show} />
    </div>
  );
}

function Amount({ amount, claimed, status }) {
  if (claimed) {
    const className = status ? css.statusSuccess : css.statusFail;
    const text = status ? `+ ${amount}` : amount;
    return <div className={className}>{text}</div>;
  } else {
    return <div>{amount}</div>;
  }
}

function Claimed({ claimed, status, click = () => {} }) {
  if (claimed) {
    const className = status ? css.statusSuccess : css.statusFail;
    const text = status ? "Success" : "Fail";
    return <div className={className}>{text}</div>;
  } else {
    return (
      <div className={css.iconButton} onClick={click}>
        <TfiGift size={18} />
      </div>
    );
  }
}

const _BetOn = {
  10: "Red",
  11: "Violet",
  12: "Green",
};

function Body({ item = {}, show }) {
  const className = item.claimed
    ? item.status
      ? css.statusSuccess
      : css.statusFail
    : css.def;
  const text = item.claimed
    ? item.status
      ? "Success"
      : "Fail"
    : "Not Claimed";

  const classNameAmount = item.claimed
    ? item.status
      ? css.statusSuccess
      : css.statusFail
    : css.def;
  const textAmount = item.status ? `+ ${item.amount}` : item.amount;
  const activeClass = show
    ? `${css.bodyCont} ${css.active}`
    : `${css.bodyCont}`;
  return (
    <div className={activeClass}>
      <div>
        <div className={css.pair}>
          <div className={css.key}>Bet Id</div>
          <div className={css.value}>{item.betid}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Bet On</div>
          <div className={css.value}>{_BetOn[item.onid] || item.onid}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Contract Amount</div>
          <div className={css.value}>{item.contractamount}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Amount</div>
          <div className={classNameAmount}>{textAmount}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Fee</div>
          <div className={css.value}>{item.fee}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Type</div>
          <div className={css.value}>{item.type}</div>
        </div>
        <div className={css.pair}>
          <div className={css.key}>Status</div>
          <div className={className}>{text}</div>
        </div>
      </div>
    </div>
  );
}
