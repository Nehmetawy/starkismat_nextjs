import { useAppUIState } from "@/snippets/hooks/globalUi";
import SapreeClockHook from "@/snippets/hooks/sapreeClock";
import { Gap } from "@/snippets/components";

import css from "./css.module.css";
const classDestro = {
  d: `${css.simpleButton}`,
  gg: `${css.simpleButton} ${css.t1}`,
  gr: `${css.simpleButton} ${css.t2}`,
  r: `${css.simpleButton} ${css.r}`,
  v: `${css.simpleButton} ${css.v}`,
  g: `${css.simpleButton} ${css.g}`,
  c: `${css.lockButton}`,
};

function getClass(onid, lock) {
  return lock ? classDestro.d : classDestro[onid];
}

export default function HI() {
  const togglesapreeform = useAppUIState((state) => state.togglesapreeform);
  const { lock } = SapreeClockHook();

  function click(onid) {
    if (!lock) togglesapreeform(onid, false);
  }

  return (
    <>
      <div className={css.buttonsFlex}>
        <RenderButton onid={10} type="r" lock={lock} click={click} />
        <RenderButton onid={11} type="v" lock={lock} click={click} />
        <RenderButton onid={12} type="g" lock={lock} click={click} />
      </div>
      <Gap h={30} />
      <div className={css.buttonsFlex}>
        <RenderButton onid={0} type="gr" lock={lock} click={click} />
        <RenderButton onid={1} type="g" lock={lock} click={click} />
        <RenderButton onid={2} type="r" lock={lock} click={click} />
        <RenderButton onid={3} type="g" lock={lock} click={click} />
        <RenderButton onid={4} type="r" lock={lock} click={click} />
      </div>
      <Gap h={10} />
      <div className={css.buttonsFlex}>
        <RenderButton onid={5} type="gg" lock={lock} click={click} />
        <RenderButton onid={6} type="r" lock={lock} click={click} />
        <RenderButton onid={7} type="g" lock={lock} click={click} />
        <RenderButton onid={8} type="r" lock={lock} click={click} />
        <RenderButton onid={9} type="g" lock={lock} click={click} />
      </div>
      <Gap h={10} />
    </>
  );
}
const textDestro = {
  10: "Red",
  11: "Violet",
  12: "Green",
};
function RenderButton({ onid, click, type, lock }) {
  const text = textDestro[onid] || onid;
  return (
    <div
      className={getClass(type, lock)}
      onClick={() => {
        click(onid);
      }}>
      {text}
    </div>
  );
}
