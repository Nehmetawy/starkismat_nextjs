import { useEffect, useRef, useState } from "react";
import css from "./main.module.css";

const inputcssdestro = {
  def: css.otpInput,
  selected: `${css.otpInput} ${css.selected}`,
};

export default function OtpInput({ getValue }) {
  const [activeInput, setActiveInput] = useState(1);
  const [otp, setOtp] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
  });

  const inipClick = (srno) => {
    const clip = Math.max(Math.min(srno, 6), 0);
    setActiveInput(clip);
  };

  const onChange = (e, srno) => {
    const val = e.target.value;
    var x = val % 10;
    const clip = Math.max(Math.min(x, 9), 0);
    // change the active one to one in front
    const nO = {
      ...otp,
      [srno]: clip,
    };
    setOtp(nO);
    const optNumber = `${nO[1]}${nO[2]}${nO[3]}${nO[4]}${nO[5]}${nO[6]}`;
    getValue(optNumber, "user_otp", false);

    if (srno === 6) {
      setActiveInput(0);
      getValue(optNumber, "user_otp", true);
    } else {
      const activeclip = Math.max(Math.min(srno + 1, 6), 0);
      setActiveInput(activeclip);
    }
  };

  return (
    <div className={css.otpInputGrid}>
      {RenderInput(onChange, inipClick, 1, otp, activeInput)}
      {RenderInput(onChange, inipClick, 2, otp, activeInput)}
      {RenderInput(onChange, inipClick, 3, otp, activeInput)}
      {RenderInput(onChange, inipClick, 4, otp, activeInput)}
      {RenderInput(onChange, inipClick, 5, otp, activeInput)}
      {RenderInput(onChange, inipClick, 6, otp, activeInput)}
    </div>
  );
}

function RenderInput(onChange, inpClick, srno, otp, activeInput) {
  const ref = useRef(undefined);
  const getCss = (srno) => {
    return srno === activeInput ? inputcssdestro.selected : inputcssdestro.def;
  };
  useEffect(() => {
    if (activeInput === srno) {
      const item = ref.current;
      if (item) {
        item.focus();
      }
    } else {
      const item = ref.current;
      if (item) {
        item.blur();
      }
    }
  }, [activeInput]);

  return (
    <input
      ref={ref}
      type="number"
      value={otp[srno]}
      onClick={() => {
        inpClick(srno);
      }}
      max={9}
      min={0}
      className={getCss(srno)}
      onChange={(e) => {
        onChange(e, srno);
      }}
    />
  );
}
