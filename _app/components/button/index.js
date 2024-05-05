import Button from "./ui/button";

export default function BUTTON({
  text = "Submit",
  onClick = () => {},
  state = "default",
  id = "",
}) {
  const commHandle = () => {
    onClick("", id);
  };
  return <Button text={text} state={state} commHandle={commHandle} id={id} />;
}
