"use client";
import { useRouter } from "next/navigation";

const indexDestro = {
  updprofile: "/profile/update",
  balance: "/profile/balance",
  query: "/profile/queries",
  createquery: "/profile/queries/new",
};

export default function ProfileNavHook() {
  const router = useRouter();

  function changeRouter(index) {
    const toRoute = indexDestro[index];
    if (toRoute) {
      router.push(toRoute);
    }
    if (index === "logout") {
      //   logoutUser();
    }
  }
  return { changeRouter };
}
