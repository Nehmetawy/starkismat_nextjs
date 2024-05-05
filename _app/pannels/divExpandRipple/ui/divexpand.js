import css from "./main.module.css";

export default function HI({ children }) {
  return (
    <div className={css.cont}>
      <div className={css.box}>{children}</div>
    </div>
  );
}
