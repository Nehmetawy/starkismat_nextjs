import css from "./main.module.css";

const classDestro = {
  red: `${css.colorWin} ${css.r}`,
  green: `${css.colorWin} ${css.g}`,
  violet: `${css.colorWin} ${css.v}`,
};

export default function HI() {
  return (
    <>
      <div className={css.listRow}>
        <div className={css.text}>201455788</div>
        <div className={css.winFlex}>
          <div className={css.numWin}>7</div>
          <div className={css.colorWin} />
        </div>
      </div>
    </>
  );
}
