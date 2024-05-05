import NavUI from "./ui";
import NavAction from "./action";

export default function PROFILENAV() {
  const { changeRouter } = NavAction();

  return (
    <>
      <NavUI changeRoute={changeRouter} />
    </>
  );
}
