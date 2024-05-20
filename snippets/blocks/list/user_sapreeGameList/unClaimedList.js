import { useState } from "react";
import { List } from "@/snippets/components";
import useAppstate from "@/snippets/hooks/golbalApp";
import App_UsersapreeGameHook from "@/snippets/hooks/list/user_sapreeGamesHook";

export default function User_sapreeGameList() {
  const [show, setShow] = useState(false);
  const data = useAppstate((state) => state.user_sapreeGamesUnClaimed);
  const pongShow = () => setShow(!show);
  const { props, get } = App_UsersapreeGameHook({ claimed: false });

  const refreshData = (e) => {
    if (props.loading) return;
    if (!show) return;
    e.stopPropagation();
    e.preventDefault();
    get(true);
  };

  return (
    <div>
      <List.Head text="Claim" click={pongShow}>
        <List.Title items={["Id", "Amount", "Status"]} />
        <List.Refresh refresh={refreshData} />
      </List.Head>
      <List.Cont show={show} isLoading={props.loading}>
        <List.RenderItems
          data={data}
          Element={List.UserSapreeItem}
          id="submittime"
        />
      </List.Cont>
    </div>
  );
}
