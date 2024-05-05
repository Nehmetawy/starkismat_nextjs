import React, { useEffect, useState } from "react";
import css from "./main.module.css";
import { getBetId } from "../../../_utils/sapreeTimer";

const { betId, timeInBet } = getBetId();
function getMin(t) {
  const ct = t || 180;
  return Math.floor(ct / 60);
}

function getSecond(t, index) {
  const ct = t || 180;
  const i = index || 0;
  const min = Math.floor(ct / 60);
  const sec = ct - min * 60;
  const str = String(sec);
  if (str.length > 1) {
    return str[i];
  } else {
    return i === 0 ? "0" : str[0];
  }
}
export default function HI() {
  const [seconds, setSeconds] = useState(timeInBet);
  const [currentBetId, setBetId] = useState(betId);

  useEffect(() => {
    const runPerSec = () => {
      const { timeInBet: sec, betId: id } = getBetId();
      setBetId(id);
      setSeconds(sec);
    };
    const interval = setInterval(runPerSec, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={css.headGrid}>
      <div className={css.headFlex}>
        <div className={css.text}>{currentBetId}</div>
      </div>
      <div className={css.clockFlex}>
        <div className={css.clockNum}>{getMin(seconds)}</div>
        <div className={css.clockPin}>:</div>
        <div className={css.clockNum}>{getSecond(seconds)}</div>
        <div className={css.clockNum}>{getSecond(seconds, 1)}</div>
      </div>
    </div>
  );
}
