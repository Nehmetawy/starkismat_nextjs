"use client";
import css from "./css.module.css";
import { FaLocationArrow } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ButtonTI({
  toLink = "/",
  Icon = FaLocationArrow,
  text = "Login",
  size = 20,
}) {
  const router = useRouter();
  const ping = () => {
    router.push(toLink);
  };
  return (
    <div className={css.button} onClick={ping}>
      {text}
      <Icon size={size} />
    </div>
  );
}
