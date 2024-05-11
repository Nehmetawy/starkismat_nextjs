"use client";
import css from "./css.module.css";

export default function HI() {
  return (
    <div className={css.headGrid}>
      <div className={css.headFlex}>
        <div className={css.text}>20240509451</div>
      </div>
      <div className={css.clockFlex}>
        <div className={css.clockNum}>1</div>
        <div className={css.clockPin}>:</div>
        <div className={css.clockNum}>2</div>
        <div className={css.clockNum}>5</div>
      </div>
    </div>
  );
}
