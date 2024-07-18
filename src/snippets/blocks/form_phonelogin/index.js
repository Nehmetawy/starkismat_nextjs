"use client";
import { LoginHook } from "@/snippets/hooks";
import { useAuth } from "@/snippets/hooks/authContext";
import UI from "./ui";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PhoneLogin() {
  const router = useRouter();
  const authContext = useAuth();
  const { user, loading, set, appLoading } = authContext;
  const { setButton, props } = LoginHook();
  useEffect(() => {
    if (user) {
      router.push("/home");
      set("appLoading", false);
    }
  }, [loading, user]);

  return (
    <>
      <UI props={props} set={setButton} />
    </>
  );
}
