import Claimed from "./claimedList";
import UnClaimed from "./unClaimedList";

export default function User_sapreeGameList() {
  return (
    <div>
      <UnClaimed />
      <Claimed />
    </div>
  );
}
