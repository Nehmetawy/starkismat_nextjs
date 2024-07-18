import App_SapreeGameList from "./app_sapreeGameList";
import User_sapreeGameList from "./user_sapreeGameList";
import UserQueriesList from "./user_queries";

export default function ListBlock({ selectedListId = "" }) {
  if (selectedListId === "app_sapree") {
    return <App_SapreeGameList />;
  }
  if (selectedListId === "user_sapree") {
    return <User_sapreeGameList />;
  }
  if (selectedListId === "user_queries") {
    return <UserQueriesList />;
  }
  return <></>;
}

const item = {
  text: "", // goes to the heading of the list
  Icon: "", // goes to the heading of the list
  title: "", // boolean of array of 3-4 strings
};
