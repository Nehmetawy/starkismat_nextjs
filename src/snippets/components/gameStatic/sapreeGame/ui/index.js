import css from "./css.module.css";
import { Gap } from "@/snippets/components";
import Head from "./head";
import Clock from "./clock";
import Button from "./button";

export default function SapreeGameUI() {
  return (
    <div className={css.sapreeContainer}>
      <div className={css.sapreeBox}>
        {/*  */}
        <Head />
        <Gap h={10} />
        <Clock />
        <Gap h={20} />
        <Button />
      </div>
    </div>
  );
}
