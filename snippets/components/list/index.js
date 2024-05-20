import Head from "./listHead";
import Title from "./listTitle";
import Nav from "./ListNav";
import Cont from "./listCont";
import RenderItems from "./itemRendered";
import Refresh from "./refreshButton";

// -------------------------------------
// -------------------------------------
import SapreeItem from "./itemSapreeGame";
import UserSapreeItem from "./itemUserSapreeGame";
import UserQueryItem from "./itemUserQueries";

// -------------------------------------
// -------------------------------------
const List = {
  Head: Head,
  Title: Title,
  Nav: Nav,
  Cont: Cont,
  RenderItems: RenderItems,
  Refresh: Refresh,
  // ----------------------
  SapreeItem: SapreeItem,
  UserSapreeItem: UserSapreeItem,
  UserQueryItem: UserQueryItem,
};

export default List;
