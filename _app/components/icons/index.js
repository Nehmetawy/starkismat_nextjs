import css from "./main.module.css";
import Image from "next/image";
import Icons from "../../../assets/profile";
const keys = Object.keys(Icons);

const className = true ? css.iconCont : `${css.iconCont} ${css.iconActive}`;

export default function HI() {
  return (
    <div className={css.flexBox}>
      {keys.map((i) => {
        const icon = Icons[i];
        return (
          <div className={className} key={i}>
            <div className={css.iconCont}>
              <Image src={icon} className={css.icon} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
