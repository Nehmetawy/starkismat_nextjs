import css from "./main.module.css";

const classDestro = {
  d: `${css.simpleButton}`,
  gg: `${css.simpleButton} ${css.t1}`,
  gr: `${css.simpleButton} ${css.t2}`,
  r: `${css.simpleButton} ${css.r}`,
  v: `${css.simpleButton} ${css.v}`,
  g: `${css.simpleButton} ${css.g}`,
};
import { useUIstate } from "../../../../_appState/componentState";

export default function HI() {
  const togglesapreeform = useUIstate((state) => state.togglesapreeform);

  function click(event) {
    const element = event.target;
    const attr = element.getAttribute("data-target");
    togglesapreeform(attr, false);
  }

  return (
    <div>
      <div className={css.buttonsFlex}>
        <div className={classDestro.r} onClick={click} data-target="red">
          Red
        </div>
        <div className={classDestro.v} onClick={click} data-target="violet">
          Violet
        </div>
        <div className={classDestro.g} onClick={click} data-target="green">
          Green
        </div>
      </div>
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.buttonsFlex}>
        <div className={classDestro.gr} onClick={click} data-target="0">
          0
        </div>
        <div className={classDestro.g} onClick={click} data-target="1">
          1
        </div>
        <div className={classDestro.r} onClick={click} data-target="2">
          2
        </div>
        <div className={classDestro.g} onClick={click} data-target="3">
          3
        </div>
        <div className={classDestro.r} onClick={click} data-target="4">
          4
        </div>
      </div>
      <div className={css.gap10} />
      <div className={css.buttonsFlex}>
        <div className={classDestro.gg} onClick={click} data-target="5">
          5
        </div>
        <div className={classDestro.r} onClick={click} data-target="6">
          6
        </div>
        <div className={classDestro.g} onClick={click} data-target="7">
          7
        </div>
        <div className={classDestro.r} onClick={click} data-target="8">
          8
        </div>
        <div className={classDestro.g} onClick={click} data-target="9">
          9
        </div>
      </div>
    </div>
  );
}
