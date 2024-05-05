import UI from "./ui";
import Hook from "./actions";

export default function FORM() {
  const { setButton, props } = Hook();
  return (
    <>
      <UI props={props} set={setButton} />
    </>
  );
}
