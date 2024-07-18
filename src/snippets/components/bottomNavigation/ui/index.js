import css from "./main.module.css";
import { FaUserCircle } from "react-icons/fa";
import { LiaChrome } from "react-icons/lia";
import { FaScreenpal } from "react-icons/fa6";
import { LuClipboardList } from "react-icons/lu";

const classDestro = {
  false: `${css.nav}`,
  true: `${css.nav} ${css.active}`,
};
const size = 22;
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
            <FaScreenpal size={size} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("games")}
            onClick={() => {
              changeRoute("games");
            }}>
            <LiaChrome size={size} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("list")}
            onClick={() => {
              changeRoute("list");
            }}>
            <LuClipboardList size={size} />
          </div>
        </div>
        <div className={css.navBox}>
          <div
            className={returnClass("profile")}
            onClick={() => {
              changeRoute("profile");
            }}>
            <FaUserCircle size={size} />
          </div>
        </div>
      </div>
    </div>
  );
}
