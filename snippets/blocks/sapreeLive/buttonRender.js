import css from "./css.module.css";

const classDestro = {
  d: `${css.simpleButton}`,
  gg: `${css.simpleButton} ${css.t1}`,
  gr: `${css.simpleButton} ${css.t2}`,
  r: `${css.simpleButton} ${css.r}`,
  v: `${css.simpleButton} ${css.v}`,
  g: `${css.simpleButton} ${css.g}`,
};

const forGreen = [1, 3, 7, 9, 12];
const forRed = [2, 4, 6, 8, 10];

const getButtonClass = (button) => {
  if (forRed.includes(button)) return classDestro.r;
  if (forGreen.includes(button)) return classDestro.g;

  if (button === 11) return classDestro.v;
  if (button === 0) return classDestro.gr;
  if (button === 5) return classDestro.gg;
};

const getButtonName = (button) => {
  if (button === 10) return "Red";
  if (button === 11) return "Violet";
  if (button === 12) return "Green";
  return button;
};

export function BetOnButton({ onid }) {
  return <div className={getButtonClass(onid)}>{getButtonName(onid)}</div>;
}
