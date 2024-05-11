import { PiGoogleChromeLogoLight } from "react-icons/pi";
import { BsExclamationTriangle } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
const Items = [
  {
    type: "heading",
    name: "User",
    icon: PiGoogleChromeLogoLight,
  },
  {
    type: "item",
    name: "Sapree Game",
    icon: PiGoogleChromeLogoLight,
    index: 1,
    id: "user_sapree",
  },
  {
    type: "item",
    name: "Queries",
    icon: BsExclamationTriangle,
    index: 2,
    id: "user_queries",
  },
  {
    type: "item",
    name: "Transactions",
    icon: FaMoneyBill1Wave,
    index: 3,
    id: "user_transactions",
  },
  {
    type: "heading",
    name: "Games",
    icon: PiGoogleChromeLogoLight,
  },
  {
    type: "item",
    name: "Sapree Game",
    icon: PiGoogleChromeLogoLight,
    index: 1,
    id: "app_sapree",
  },
];

export default Items;

export function GetById(id) {
  var selectedItem = {};
  Items.every((item) => {
    if (item.id === id) {
      selectedItem = item;
      return false;
    } else {
      return true;
    }
  });
  return selectedItem;
}
