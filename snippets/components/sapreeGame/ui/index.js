import css from "./css.module.css";
import GAP from "@/snippets/components/gap";
import Head from "./head";
import Clock from "./clock";
import Button from "./button";

export default function SapreeGameUI() {
  return (
    <div className={css.sapreeContainer}>
      <div className={css.sapreeBox}>
        {/*  */}
        <Head />
        <GAP h={10} />
        <Clock />
        <GAP h={20} />
        <Button />
      </div>
    </div>
  );
}
