import css from "./css.module.css";

export default function DivExpand({ children, isOpen, isNeuo = true }) {
  var className = isOpen ? `${css.cont} ${css.active}` : `${css.cont}`;
  className = isNeuo ? `${className} ${css.neuo}` : className;

  return (
    <div className={className}>
      <div className={css.box}>{children}</div>
    </div>
  );
}
