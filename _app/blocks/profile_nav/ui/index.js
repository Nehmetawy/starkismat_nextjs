import css from "./main.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbCoinRupee, TbBrandRedux } from "react-icons/tb";

export default function PROFILENAV({ changeRoute }) {
  return (
    <div>
      <div className={css.container}>
        <div
          className={css.navCont}
          onClick={() => {
            changeRoute("updateprofile");
          }}>
          <div className={css.iconCont}>
            <CgProfile size={16} />
          </div>
          <div>Update Profile</div>
        </div>
        <div className={css.navCont}>
          <div className={css.iconCont}>
            <TbCoinRupee size={16} />
          </div>
          <div>Balance</div>
        </div>
        <div className={css.navCont}>
          <div className={css.iconCont}>
            <CgProfile size={16} />
          </div>
          <div>Transactions</div>
        </div>
        <div className={css.navCont}>
          <div className={css.iconCont}>
            <CgProfile size={16} />
          </div>
          <div>withdrawals</div>
        </div>
        <div className={css.navCont}>
          <div className={css.iconCont}>
            <CgProfile size={16} />
          </div>
          <div>Queries</div>
        </div>
        <div
          className={css.navCont}
          onClick={() => {
            changeRoute("mysapreebets");
          }}>
          <div className={css.iconCont}>
            <TbBrandRedux size={16} />
          </div>
          <div>My Sapree Bets</div>
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div
        className={css.logoutCont}
        onClick={() => {
          changeRoute("logout");
        }}>
        <div>LOGOUT</div>
        <div className={css.iconCont}>
          <AiOutlineLogout size={16} />
        </div>
      </div>
    </div>
  );
}
