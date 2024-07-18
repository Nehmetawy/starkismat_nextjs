"use client";
import css from "./css.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function Button({ id = "", click = () => {} }) {
  const router = useRouter();
  const ping = () => {
    router.push("/login");
  };
  return (
    <div className={css.cont}>
      <div className={css.button} onClick={ping}>
        Login
        <FaLocationArrow />
      </div>
    </div>
  );
}
