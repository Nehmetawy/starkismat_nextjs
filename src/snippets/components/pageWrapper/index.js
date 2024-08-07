"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import css from "./css.module.css";
import LoadingScreen from "./loading";
import { useAuth } from "@/snippets/hooks/authContext";

export default function PageWrapper({ children }) {
  const authContext = useAuth();
  const { user, loading, set, appLoading } = authContext;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      const isusernotallowed = userNotAllowed[pathname];
      const isProtected = checkProtected(pathname);

      if (user) {
        if (isusernotallowed) {
          router.push("/home");
          set("appLoading", false);
          return;
        }
        if (isProtected) {
          set("appLoading", false);
          return;
        }
        set("appLoading", false);
      } else {
        set("appLoading", false);
        router.push(userNotAllowed.login);
      }
    }

    //
  }, [loading, user]);

  return (
    <div className={css.page}>
      {children}
      {appLoading && <LoadingScreen />}
    </div>
  );
}

const userNotAllowed = {
  login: "/login",
  "/login": true,
};

const notProtected = {
  "/": true,
};

function checkProtected(currentPath) {
  if (notProtected[currentPath]) {
    return false;
  }
  return true;
}
