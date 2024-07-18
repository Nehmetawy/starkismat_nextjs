"use client";
import Images from "@/assets/profile";
import css from "./css.module.css";
import { TbCoinRupee } from "react-icons/tb";
import { VscLoading } from "react-icons/vsc";
import Image from "next/image";
import { GlobalApp, GenAPiCall } from "@/snippets/hooks";

export default function ProfileCard() {
  const user = GlobalApp((state) => state.userSelf);
  const userKeys = GlobalApp((state) => state.userSlef_keys);

  const { loading, error } = GenAPiCall({
    url: "getUserSelf",
    globalKeys: { ping: "appUserPing", api: "userSlef_api" },
  });

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
