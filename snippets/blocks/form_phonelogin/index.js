import PhoneLoginHook from "@/snippets/hooks/phoneLoginHook";
import UI from "./ui";

export default function PhoneLogin() {
  const { setButton, props } = PhoneLoginHook();
  return (
    <>
      <UI props={props} set={setButton} />
    </>
  );
}
