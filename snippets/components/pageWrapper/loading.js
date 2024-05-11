import css from "./css.module.css";
import { Lottie } from "@/snippets/components";
const style = {
  width: 200,
  height: 200,
};

export default function LoadingScreen() {
  return (
    <>
      <div className={css.loadingCont}>
        <div className={css.loadingBox}>
          <Lottie style={style} />
        </div>
      </div>
    </>
  );
}
