import Input from "./ui/input";

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
    <>
      <Input type={type} inp={val} setInp={fetchChannge} placeholder={text} />
    </>
  );
}
