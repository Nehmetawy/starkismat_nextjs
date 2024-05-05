import { useState } from "react";
import css from "./main.module.css";
import Lottie from "../../lottie";
import List from "./list";
import HeadRow from "./head";
import { DivExpand } from "../../../pannels";

export default function LIST() {
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);

  function onClick(forid) {
    if (forid === "top") {
      setTop(!top);
    }
    if (forid === "bottom") {
      setBottom(!bottom);
    }
  }

  return (
    <div className={css.listcont}>
      <HeadRow onClick={onClick} id="top" />
      <DivExpand isOpen={top} isNeuo={false}>
        <div className={css.listBoxB}>
          <List />
        </div>
      </DivExpand>
      <HeadRow text="Sapree" isBox={true} onClick={onClick} id="bottom" />
      <DivExpand isOpen={bottom} isNeuo={false}>
        <div className={css.listBox}>
          <List />
        </div>
      </DivExpand>
    </div>
  );
}
