import { useRouter, usePathname } from "next/navigation";

const indexDestro = {
  profile: "/profile",
  ludo: "/ludo",
  sapree: "/sapree",
  home: "/",
};

export default function HI() {
  const router = useRouter();
  const currentPath = usePathname();

  function changeRouter(index) {
    const toRoute = indexDestro[index];
    if (toRoute) {
      router.push(toRoute);
    }
  }

  function getActivePath(checkFor) {
    const checkAgainst = indexDestro[checkFor];
    return checkAgainst === currentPath;
  }

  return { changeRouter, getActivePath };
}
