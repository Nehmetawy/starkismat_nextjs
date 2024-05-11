import Images from "@/assets/profile";
import css from "./css.module.css";
import { TbCoinRupee } from "react-icons/tb";
import Image from "next/image";
import useAppstate from "@/snippets/hooks/golbalApp";

export default function ProfileCard() {
  const user = useAppstate((state) => state.userSelf);

  const name = user.name || "New User";
  const balance = user.balance || 0;
  const image = user.image || "4";

  return (
    <div className={css.container}>
      <div className={css.flex}>
        <div className={css.iconCont}>
          <Image
            src={Images[image] || Images["2"]}
            width={40}
            height={40}
            alt="profile Image"
            className={css.iconImage}
          />
        </div>
        <div>
          <div>Profile :-</div>
          <div className={css.underline}>{name}</div>
        </div>
      </div>
      {/* ------------------------- */}
      <div>
        <div className={css.flex}>
          <TbCoinRupee size={18} />
          <div className={css.amount}>₹ {balance}</div>
        </div>
      </div>
      {/* ------------------------- */}
    </div>
  );
}
