import { useState } from "react";
import { List } from "@/snippets/components";
import useAppstate from "@/snippets/hooks/golbalApp";
import App_UsersapreeGameHook from "@/snippets/hooks/list/user_sapreeGamesHook";

export default function User_sapreeGameList() {
  const [show, setShow] = useState(false);
  const data = useAppstate((state) => state.user_sapreeGamesUnClaimed);
  const pongShow = () => setShow(!show);
  const obj = App_UsersapreeGameHook({ claimed: false });

  return (
    <div>
      <List.Head text="Claim" click={pongShow}>
        <List.Title items={["Id", "Amount", "Status"]} />
      </List.Head>
      <List.Cont show={show}>
        <List.RenderItems
          data={data}
          Element={List.UserSapreeItem}
          id="betid"
        />
      </List.Cont>
    </div>
  );
}
