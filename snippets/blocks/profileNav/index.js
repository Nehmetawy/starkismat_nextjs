import css from "./css.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbCoinRupee, TbBrandRedux } from "react-icons/tb";
import { BsExclamationTriangle } from "react-icons/bs";
import ProfileNavHook from "@/snippets/hooks/profileNav_hook";

export default function ProfileNav() {
  const { changeRouter } = ProfileNavHook();

  return (
    <div>
      <div className={css.container}>
        {RenderButton("Update Profile", "updprofile", changeRouter, CgProfile)}
        {RenderButton("Balance", "balance", changeRouter, TbCoinRupee)}
        {RenderButton(
          "Complaints",
          "query",
          changeRouter,
          BsExclamationTriangle
        )}
      </div>
    </div>
  );
}

function RenderButton(text, uid, click, Icon) {
  const ping = () => {
    click(uid);
  };

  return (
    <div className={css.navCont} onClick={ping}>
      <div className={css.iconCont}>
        <Icon size={16} />
      </div>
      <div>{text}</div>
    </div>
  );
}
