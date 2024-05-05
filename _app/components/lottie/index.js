import Lottie from "lottie-react";

import LoadingA from "../../../assets/lottie/lottie_loading_a.json";
import css from "./main.module.css";

const defstyle = {
  width: 100,
  height: 100,
};

export default function LottieAnimation({ style = defstyle }) {
  return (
    <div className={css.container}>
      <Lottie animationData={LoadingA} loop={true} style={style} />
    </div>
  );
}
