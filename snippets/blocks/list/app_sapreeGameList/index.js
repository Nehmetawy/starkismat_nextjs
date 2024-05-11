import { useState } from "react";
import { List } from "@/snippets/components";
import useAppstate from "@/snippets/hooks/golbalApp";
import App_sapreeGameHook from "@/snippets/hooks/list/app_sapreeGamesHook";

export default function App_SapreeGameList() {
  const [show, setShow] = useState(true);
  const data = useAppstate((state) => state.app_sapreeGames);
  const pongShow = () => setShow(!show);
  const { isLoading } = App_sapreeGameHook();

  return (
    <div>
      <List.Head text="Sapree History" click={pongShow}>
        <List.Title />
      </List.Head>
      <List.Cont show={show}>
        <List.RenderItems data={data} Element={List.SapreeItem} id="betid" />
      </List.Cont>
    </div>
  );
}
