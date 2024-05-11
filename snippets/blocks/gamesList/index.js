import { GameStatics } from "@/snippets/components";
import css from "./ui/css.module.css";
import Button from "./ui/button";
import GameList_hook from "@/snippets/hooks/gameListHook";

export default function GamesList() {
  const { changeRouter } = GameList_hook();
  return (
    <div>
      <div className={css.gameBox}>
        <GameStatics.Sapree />
        <div className={css.flex}>
          <div className={css.title}>Sapree</div>
          <Button click={changeRouter} id="sapree" />
        </div>
      </div>
    </div>
  );
}
