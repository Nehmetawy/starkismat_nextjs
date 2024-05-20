import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import css from "./css.module.css";

export default function BackNavigation({ title = "Back" }) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div className={css.container} onClick={onClick}>
      <div className={css.flex}>
        <IoMdArrowRoundBack size={18} />
        <div className={css.title}>{title}</div>
      </div>
    </div>
  );
}
