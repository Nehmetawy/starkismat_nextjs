import { useState } from "react";
import Claimed from "./claimedList";
import UnClaimed from "./unClaimedList";

import useAppstate from "@/snippets/hooks/golbalApp";

export default function User_sapreeGameList() {
  const [show, setShow] = useState(true);
  const data = useAppstate((state) => state.user_sapreeGames);
  const pongShow = () => setShow(!show);

  return (
    <div>
      <UnClaimed />
      <Claimed />
    </div>
  );
}
