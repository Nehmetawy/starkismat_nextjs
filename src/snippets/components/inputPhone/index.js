import Input from "../input";
import css from "./css.module.css";

export default function PhoneInput({
  val = "",
  getValue,
  type = "text",
  text = "input",
  id = "",
}) {
  const pingChange = (val) => {
    getValue(val, id);
  };
  return (
    <div className={css.grid}>
      <div className={css.iconCont}>+91</div>
      <Input type={type} val={val} getValue={pingChange} placeholder={text} />
    </div>
  );
}
