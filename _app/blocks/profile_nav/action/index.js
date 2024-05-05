import { useRouter } from "next/navigation";
import logoutUser from "../../../../_auth/logout";

const indexDestro = {
  profile: "/profile",
  ludo: "/ludo",
  sapree: "/sapree",
  mysapreebets: "/user/sapreebets",
  updateprofile: "/profile/update",
};

export default function ACTION() {
  const router = useRouter();

  function changeRouter(index) {
    const toRoute = indexDestro[index];
    if (toRoute) {
      router.push(toRoute);
    }
    if (index === "logout") {
      logoutUser();
    }
  }

  return { changeRouter };
}
