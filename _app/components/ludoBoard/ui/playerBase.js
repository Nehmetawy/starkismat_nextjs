import css from "./main.module.css";

const classDistro = {
  tl: `${css.playerBase} ${css.topleft}`,
  tr: `${css.playerBase} ${css.topright}`,
  bl: `${css.playerBase} ${css.bottomleft}`,
  br: `${css.playerBase} ${css.bottomright}`,
};

export default function Grid({ type = "tl" }) {
  const className = classDistro[type];
  return (
    <div className={className}>
      <div className={css.playerBox}></div>
    </div>
  );
}
