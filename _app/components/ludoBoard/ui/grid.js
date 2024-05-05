import React, { useEffect, useRef, useState } from "react";
import LudoCells from "./cells";
import PlayerBase from "./playerBase";
import CastleBase from "./castleBase";
import { _getCordsFromRef } from "../utils/index";
import css from "./main.module.css";

export default function Grid() {
  const gridRef = useRef(null);
  const [cellWidth, setCellWidth] = useState(10);

  useEffect(() => {
    const cw = _getCordsFromRef(gridRef);
    setCellWidth(cw);
  }, []);

  return (
    <div className={css.ludoGrid} ref={gridRef}>
      <CastleBase />
      <LudoCells cellWidth={cellWidth} />
      <PlayerBase type="tl" />
      <PlayerBase type="tr" />
      <PlayerBase type="bl" />
      <PlayerBase type="br" />
    </div>
  );
}
