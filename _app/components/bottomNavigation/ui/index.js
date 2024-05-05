import css from "./main.module.css";
import { FaDice } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { LiaChrome } from "react-icons/lia";
import { FaScreenpal } from "react-icons/fa6";

const classDestro = {
  false: `${css.nav}`,
  true: `${css.nav} ${css.active}`,
};

export default function NAVUI({ changeRoute, getActivePath }) {
  function returnClass(path) {
    const bool = getActivePath(path);
    return classDestro[bool];
  }

  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.navBox}>
          <div
            className={returnClass("home")}
            onClick={() => {
              changeRoute("home");
            }}>
            <FaScreenpal size={20} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("sapree")}
            onClick={() => {
              changeRoute("sapree");
            }}>
            <LiaChrome size={20} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("ludo")}
            onClick={() => {
              changeRoute("ludo");
            }}>
            <FaDice size={20} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("profile")}
            onClick={() => {
              changeRoute("profile");
            }}>
            <FaUserCircle size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
