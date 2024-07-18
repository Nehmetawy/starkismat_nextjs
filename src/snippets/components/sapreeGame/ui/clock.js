"use client";

import css from "./css.module.css";
import SapreeClockHook from "../sapreeClock";

export default function HI() {
  const { clockMinutes, clockSecondsTenth, clockSecondsUnit, betId, lock } =
    SapreeClockHook();

  return (
    <div className={css.headGrid}>
      <div className={css.headFlex}>
        <div className={css.text}>{betId}</div>
      </div>
      <div className={css.clockFlex}>
        <div className={css.clockNum}>{clockMinutes}</div>
        <div className={css.clockPin}>:</div>
        <div className={css.clockNum}>{clockSecondsTenth}</div>
        <div className={css.clockNum}>{clockSecondsUnit}</div>
      </div>
    </div>
  );
}
