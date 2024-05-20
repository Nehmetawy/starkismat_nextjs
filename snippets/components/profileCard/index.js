import Images from "@/assets/profile";
import css from "./css.module.css";
import { TbCoinRupee } from "react-icons/tb";
import { VscLoading } from "react-icons/vsc";
import Image from "next/image";
import useAppstate from "@/snippets/hooks/golbalApp";
import UserSelf_HOOK from "@/snippets/hooks/userSelf";

export default function ProfileCard() {
  const user = useAppstate((state) => state.userSelf);
  const { get, props } = UserSelf_HOOK();
  const loading = props.loading || false;
  const error = props.error || false;
  const name = user.Name || "New User";
  const balance = user.Balance || 0;
  const image = user.Image || "4";

  return (
    <div className={css.container} onClick={get}>
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
          <div className={css.underline}>
            <LoadingText loading={loading} text={name} />
          </div>
        </div>
      </div>
      {/* ------------------------- */}
      <div>
        <div className={css.flex}>
          <TbCoinRupee size={18} />
          <div className={css.amount}>
            ₹ <LoadingText loading={loading} text={balance} />
          </div>
        </div>
      </div>
      {/* ------------------------- */}
    </div>
  );
}

function LoadingText({ loading, text }) {
  if (loading) {
    return (
      <div className={css.loading}>
        <VscLoading size={12} />
      </div>
    );
  } else {
    return text;
  }
}
