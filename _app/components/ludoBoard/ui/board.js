import css from "./main.module.css";
import Grid from "./grid";

export default function LudoBoard() {
  return (
    <div className={css.ludoUiCont}>
      <Grid />
    </div>
  );
}
