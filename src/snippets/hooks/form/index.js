import SapreeFormHook from "./sapreeGame";
import UserFormHook from "./profileUpdate";
import BalanceFormHook from "./profileBalance";

const formHooks = {
  sapree: SapreeFormHook,
  user: UserFormHook,
  userBalance: BalanceFormHook,
};
export default formHooks;
