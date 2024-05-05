import { useEffect } from "react";
import { useAuth } from "../../../_app/context/authContext";
import LoadingScreen from "./ui";
import { usePathname, useRouter } from "next/navigation";

export default function PageWrapper({ children }) {
  const authContext = useAuth();
  const { user, loading, set, appLoading } = authContext;

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      const isProtected = checkProtected(pathname);
      const isusernotallowed = checkopenpath(pathname);
      if (user) {
        if (isProtected) {
          set("appLoading", false);
        } else if (isusernotallowed) {
          router.push(protectedPath.sapree);
        } else {
          set("appLoading", false);
        }
      } else {
        router.push(openpaths.login);
      }
    }
  }, [loading]);

  return (
    <>
      {children}
      {appLoading && <LoadingScreen />}
    </>
  );
}

const openpaths = {
  login: "/app/login",
  "/app/login": true,
};

const protectedPath = {
  sapree: "/sapree",
  "/sapree": true,
};

function checkProtected(currentPath) {
  return protectedPath[currentPath];
}
function checkopenpath(currentPath) {
  return openpaths[currentPath];
}
/**
  if 

 */
