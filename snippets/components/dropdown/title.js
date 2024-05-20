import css from "./css.module.css";
import { BsExclamationTriangle } from "react-icons/bs";
import { GetById } from "./items";

export default function RenderTitle({ id = "", click = () => {} }) {
  const item = GetById(id) || {};
  const name = item.name || "select";
  const Icon = item.icon || BsExclamationTriangle;

  return (
    <div className={css.dropDownItem} onClick={click}>
      <div>{name}</div>
      <div>
        <Icon size={18} />
      </div>
    </div>
  );
}
