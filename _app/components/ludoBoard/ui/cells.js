import css from "./main.module.css";
import LudoStar from "../../../../assets/logo/ludostar";

const classDestro = {
  def: `${css.ludoCell}`,
  tl: `${css.ludoCell} ${css.ludoCell_tl}`,
  t: `${css.ludoCell} ${css.ludoCell_t}`,
  l: `${css.ludoCell} ${css.ludoCell_l}`,
};

const indexDestro = {
  1: "tl",
  2: "t",
  3: "t",
  4: "l",
  7: "l",
  10: "l",
  13: "l",
  16: "l",
  19: "tl",
  20: "t",
  21: "t",
  22: "t",
  23: "t",
  24: "t",
  25: "tl",
  26: "t",
  27: "t",
  28: "t",
  29: "t",
  30: "t",
  31: "l",
  37: "l",
  43: "l",
  49: "l",
  55: "tl",
  56: "t",
  57: "t",
  58: "l",
  61: "l",
  64: "l",
  67: "l",
  70: "l",
};

const STARSQUARES = [7, 28, 66, 45];

export default function Cells({ cellWidth }) {
  const array = [];
  if (!cellWidth) return array;
  let i = 1;
  while (i < 73) {
    const pick = indexDestro[i] || "def";
    const pickClass = classDestro[pick];
    const hasStar = STARSQUARES.includes(i);
    array.push(
      <div className={pickClass} key={i}>
        {hasStar && <LudoStar size={cellWidth - 5} />}
      </div>
    );
    i++;
  }
  return array;
}
