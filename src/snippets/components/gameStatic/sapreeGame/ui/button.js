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

export default function HI() {
  return (
    <>
      <div className={css.buttonsFlex}>
        <RenderButton onid={10} type="r" />
        <RenderButton onid={11} type="v" />
        <RenderButton onid={12} type="g" />
      </div>
      <Gap h={30} />
      <div className={css.buttonsFlex}>
        <RenderButton onid={0} type="gr" />
        <RenderButton onid={1} type="g" />
        <RenderButton onid={2} type="r" />
        <RenderButton onid={3} type="g" />
        <RenderButton onid={4} type="r" />
      </div>
      <Gap h={10} />
      <div className={css.buttonsFlex}>
        <RenderButton onid={5} type="gg" />
        <RenderButton onid={6} type="r" />
        <RenderButton onid={7} type="g" />
        <RenderButton onid={8} type="r" />
        <RenderButton onid={9} type="g" />
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

function RenderButton({ onid, type }) {
  const text = textDestro[onid] || onid;
  return <div className={classDestro[type]}>{text}</div>;
}
