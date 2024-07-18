import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { GlobalUI } from "@/snippets/hooks";

const indexDestro = {
  profile: "/profile",
  game: "/games",
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
  const { lastGamePath, set } = GlobalUI(selection);

  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const { main, game } = getfirstmatch(currentPath);
    if (game) {
      set(game);
    }
  }, []);

  function changeRouter(path) {
    if (path === "games") {
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
  if (path === "games") {
    const gameName = array[2] || undefined;
    return { main: path, game: gameName };
  } else {
    return { main: path };
  }
}
