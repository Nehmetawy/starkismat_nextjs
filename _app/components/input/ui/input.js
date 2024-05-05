import css from "./main.module.css";

export default function INPUT({
  inp = "",
  setInp = () => {},
  type = "text",
  placeholder = "input",
}) {
  return (
    <input
      className={css.input}
      placeholder={placeholder}
      onChange={setInp}
      value={inp}
      type={type}
    />
  );
}
