import { useRouter, usePathname } from "next/navigation";

const indexDestro = {
  sapree: "/game/sapree",
};

export default function GameList_hook() {
  const router = useRouter();

  function changeRouter(path) {
    const toRoute = indexDestro[path];
    if (toRoute) {
      router.push(toRoute);
    }
  }

  return { changeRouter };
}
