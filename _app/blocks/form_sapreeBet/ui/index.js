import css from "./main.module.css";
import Cancel from "./cancel";
import { useState } from "react";
import { Input, Button } from "../../../components";
import { rvgAmountInput } from "../../../_utils/input";

const classDestro = {
  d: `${css.simpleButton}`,
  gg: `${css.simpleButton} ${css.t1}`,
  gr: `${css.simpleButton} ${css.t2}`,
  r: `${css.simpleButton} ${css.r}`,
  v: `${css.simpleButton} ${css.v}`,
  g: `${css.simpleButton} ${css.g}`,
};

const getButtonClass = (button) => {
  const forGreen = ["1", "3", "7", "9"];
  const forRed = ["2", "4", "6", "8"];
  if (button === "red" || forRed.includes(button)) return classDestro.r;
  if (button === "violet") return classDestro.v;
  if (button === "green" || forGreen.includes(button)) return classDestro.g;
  if (button === "0") return classDestro.gr;
  if (button === "5") return classDestro.gg;
  return classDestro.g;
};

export default function FORM_SAPREEBET_UI({ toggle, button }) {
  //
  const [rvg_amount, setAmount] = useState();
  // set amount
  function getInputAmount(val) {
    const finalValue = rvgAmountInput(val);
    setAmount(finalValue);
  }

  return (
    <div className={css.formCont}>
      <Cancel
        onClick={() => {
          toggle(false, true);
        }}
      />
      {button && <div className={getButtonClass(button)}>{button}</div>}
      <div className={css.optionsGrid}>
        {RenderButton(5, setAmount)}
        {RenderButton(10, setAmount)}
        {RenderButton(15, setAmount)}
        {RenderButton(20, setAmount)}
        {RenderButton(40, setAmount)}
        {RenderButton(50, setAmount)}
        {RenderButton(70, setAmount)}
        {RenderButton(100, setAmount)}
      </div>
      <Input
        val={rvg_amount}
        type="number"
        text="amount"
        getValue={getInputAmount}
      />
      <div className={css.gap} />
      <div className={css.gap} />
      <div className={css.gap} />
      <Button />
      <div className={css.gap} />
      <div className={css.gap} />
      <div className={css.gap} />
    </div>
  );
}

function RenderButton(amount, setAmount) {
  function pingAmount() {
    setAmount(amount);
  }
  return (
    // <div className={css.optiosCont}>
    <div className={css.options} onClick={pingAmount}>
      {amount}
    </div>
    // </div>
  );
}
