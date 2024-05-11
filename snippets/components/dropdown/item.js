import css from "./css.module.css";
import { BsExclamationTriangle } from "react-icons/bs";

export default function RenderItem({ item = {}, click = () => {} }) {
  const type = item.type || "list";
  const name = item.name || "item name";
  const Icon = item.icon || BsExclamationTriangle;
  const index = item.index || 0;
  const id = item.id || "";
  if (type === "heading") {
    return (
      <div className={css.dropDownHeading}>
        <div>{name}</div>
      </div>
    );
  } else {
    return (
      <div
        className={css.dropDownItem}
        onClick={() => {
          click(id);
        }}>
        <div>{`${index}. ${name}`}</div>
        <div>
          <Icon size={18} />
        </div>
      </div>
    );
  }
}
