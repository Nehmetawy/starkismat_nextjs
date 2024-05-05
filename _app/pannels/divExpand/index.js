import css from "./ui/main.module.css";

export default function DIVEXPAND({ children, isOpen, isNeuo = true }) {
  var className = isOpen ? `${css.cont} ${css.active}` : `${css.cont}`;
  className = isNeuo ? `${className} ${css.neuo}` : className;

  return (
    <div className={className}>
      <div className={css.box}>{children}</div>
    </div>
  );
}
