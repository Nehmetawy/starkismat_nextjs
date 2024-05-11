import css from "./css.module.css";

export default function Input({
  val = "",
  getValue = () => {},
  type = "text",
  id = "",
  text = "",
}) {
  const pingChange = (event) => {
    const newVal = event.target.value;
    getValue(newVal, id);
  };

  return (
    <input
      placeholder={text}
      value={val}
      type={type}
      className={css.input}
      onChange={pingChange}
    />
  );
}
