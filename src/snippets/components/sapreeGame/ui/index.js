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
        <Gap h={15} />
        <Clock />
        <Gap h={30} />
        <Button />
      </div>
    </div>
  );
}
