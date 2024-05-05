import css from "./main.module.css";
import Head from "./head";
import Clock from "./clock";
import Button from "./buttons";

export default function HI() {
  return (
    <div className={css.sapreeContainer}>
      <div className={css.sapreeBox}>
        <Head />
        <div className={css.gap10} />
        <Clock />
        <div className={css.gap10} />
        <div className={css.gap10} />
        <Button />
      </div>
    </div>
  );
}
