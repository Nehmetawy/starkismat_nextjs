import css from "./css.module.css";
import { LottieAnimation } from "../../components";

const style = {
  width: 200,
  height: 200,
};
export default function LoadingScreen() {
  return (
    <>
      <div className={css.loadingCont}>
        <div className={css.loadingBox}>
          <LottieAnimation style={style} />
        </div>
      </div>
    </>
  );
}
