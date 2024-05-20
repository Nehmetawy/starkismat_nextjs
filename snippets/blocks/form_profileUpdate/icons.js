import css from "./css.module.css";
import Image from "next/image";
import AvailableIcons from "@/assets/profile";
const availableKeys = Object.keys(AvailableIcons);

const className = (bool) =>
  bool ? `${css.iconCont} ${css.iconActive}` : css.iconCont;

export default function ProfileIcons({
  val = "1",
  ping = () => {},
  id = "user_image",
}) {
  return (
    <div className={css.flexBox}>
      {availableKeys.map((key) => {
        {
          const icon = AvailableIcons[key];
          const isSelected = val === String(key);
          return (
            <div
              className={className(isSelected)}
              key={key}
              onClick={() => {
                ping(String(key), id);
              }}>
              <div className={css.iconCont}>
                <Image src={icon} className={css.icon} alt="" />
              </div>
            </div>
          );
          /*  */
        }
      })}
    </div>
  );
}
