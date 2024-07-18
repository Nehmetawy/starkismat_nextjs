"use client";
import Lottie from "lottie-react";
import css from "./css.module.css";

import LoadingA from "@/assets/lottie/lottie_loading_a.json";
import confitti from "@/assets/lottie/confitti.json";

const defstyle = {
  width: 100,
  height: 100,
};
const animDestro = {
  loading: LoadingA,
  confitti: confitti,
};

export default function LottieAnimation({
  style = defstyle,
  type = "loading",
  loop = true,
}) {
  const anim_json = animDestro[type] || LoadingA;
  return (
    <div className={css.container}>
      <Lottie animationData={anim_json} loop={loop} style={style} />
    </div>
  );
}
