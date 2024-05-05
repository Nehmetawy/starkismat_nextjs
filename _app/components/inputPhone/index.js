import Input from "./ui/input";
import css from "./ui/main.module.css";

export default function wINP({
  val = "",
  getValue,
  type = "text",
  text = "input",
  id = "",
}) {
  function fetchChannge(e) {
    const newVal = e.target.value;
    getValue ? getValue(newVal, id) : "";
  }

  return (
    <div className={css.grid}>
      <div className={css.iconCont}>+91</div>
      <Input type={type} inp={val} setInp={fetchChannge} placeholder={text} />
    </div>
  );
}
