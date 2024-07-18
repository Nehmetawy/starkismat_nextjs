import React from "react";
import { GamesList, LoginButton, Lottie } from "@/snippets/components";
import css from "./css.module.css";

// const style = { height: "60px", width: "100%", zIndex: 1000 };
function page() {
  return (
    <div>
      <div style={{ height: "250px" }}>
        <Lottie />
        {/* <Lottie style={style} /> */}
      </div>
      <LoginButton />
      {/* <GamesList /> */}
    </div>
  );
}

export default page;
