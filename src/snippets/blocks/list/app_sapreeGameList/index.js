import { useState } from "react";
import { List } from "@/snippets/components";
import useAppstate from "@/snippets/hooks/golbalApp";
import App_sapreeGameHook from "@/snippets/hooks/list/app_sapreeGamesHook";

export default function App_SapreeGameList() {
  const [show, setShow] = useState(true);
  const data = useAppstate((state) => state.app_sapreeGames);
  const pongShow = () => setShow(!show);
  const { get, props } = App_sapreeGameHook();

  const refreshData = (e) => {
    if (props.loading) return;
    if (!show) return;
    e.stopPropagation();
    e.preventDefault();
    get(true);
  };

  return (
    <div>
      <List.Head text="Sapree Game History" click={pongShow}>
        <List.Title />
        <List.Refresh refresh={refreshData} />
      </List.Head>
      <List.Cont show={show} isLoading={props.loading}>
        <List.RenderItems data={data} Element={List.SapreeItem} id="betid" />
      </List.Cont>
    </div>
  );
}
