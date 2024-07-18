"use client";
import { GameStatics } from "@/snippets/components";
import css from "./ui/css.module.css";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

const indexDestro = {
  sapree: "/games/sapree",
};

export default function GamesList() {
  const router = useRouter();

  function changeRouter(path) {
    const toRoute = indexDestro[path];
    if (toRoute) {
      router.push(toRoute);
    }
  }

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
