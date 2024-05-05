import NavUI from "./ui";
import NavAction from "./action";

export default function HI() {
  const { changeRouter, getActivePath } = NavAction();
  return (
    <>
      <NavUI changeRoute={changeRouter} getActivePath={getActivePath} />
    </>
  );
}
