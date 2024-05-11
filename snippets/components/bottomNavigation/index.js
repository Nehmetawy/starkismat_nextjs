import NavUI from "./ui";
import BottomNav_hook from "@/snippets/hooks/bottomNav_hook";

export default function HI() {
  const { changeRouter, getActivePath } = BottomNav_hook();
  return (
    <>
      <NavUI changeRoute={changeRouter} getActivePath={getActivePath} />
    </>
  );
}
