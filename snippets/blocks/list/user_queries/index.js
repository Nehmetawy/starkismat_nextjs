import { useState } from "react";
import { List } from "@/snippets/components";
import useAppstate from "@/snippets/hooks/golbalApp";
import App_userQueriesHook from "@/snippets/hooks/list/user_queriesHook";
export default function UserQueriesList() {
  const [show, setShow] = useState(true);
  const data = useAppstate((state) => state.user_queries);
  const pongShow = () => setShow(!show);
  const { isLoading } = App_userQueriesHook();

  return (
    <div>
      <List.Head text="My Queries" click={pongShow}></List.Head>
      <List.Cont show={show}>
        <List.RenderItems
          data={data}
          Element={List.UserQueryItem}
          id="submittime"
        />
      </List.Cont>
    </div>
  );
}
