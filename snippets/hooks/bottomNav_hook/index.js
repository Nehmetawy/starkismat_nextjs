import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useAppUIState } from "@/snippets/hooks/globalUi/index";

const indexDestro = {
  profile: "/profile",
  game: "/game",
  list: "/list",
  home: "/home",
};

function selection(state) {
  return {
    lastGamePath: state.lastGamePath,
    set: state.setLastGamePath,
  };
}
export default function BottomNav_hook() {
  const { lastGamePath, set } = useAppUIState(selection);

  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const { main, game } = getfirstmatch(currentPath);
    if (game) {
      set(game);
    }
  }, []);

  function changeRouter(path) {
    if (path === "game") {
      const toRoute = `${indexDestro.game}/${lastGamePath || "sapree"}`;
      router.push(toRoute);
      return;
    }
    const toRoute = indexDestro[path];
    if (toRoute) {
      router.push(toRoute);
    }
  }
  function getActivePath(checkFor) {
    const { main } = getfirstmatch(currentPath);
    return checkFor === main;
  }

  return { changeRouter, getActivePath };
}

function getfirstmatch(currentPath) {
  const array = currentPath.split("/");
  const path = array[1];
  if (path === "game") {
    const gameName = array[2] || undefined;
    return { main: path, game: gameName };
  } else {
    return { main: path };
  }
}
