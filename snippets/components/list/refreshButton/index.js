import css from "./css.module.css";
import { HiRefresh } from "react-icons/hi";
export default function ListCont({ refresh = () => {} }) {
  return (
    <div className={css.cont} onClick={refresh}>
      <HiRefresh size={20} />
    </div>
  );
}
