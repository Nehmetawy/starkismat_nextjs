import {
  BottomNavigation,
  SapreeGame,
  ProfileCard,
} from "@/snippets/components";
import { FormPlaceSapreeBet, SapreeLive } from "@/snippets/blocks";

export default function Profile() {
  return (
    <div>
      <ProfileCard />
      <SapreeGame />
      <SapreeLive />
      <FormPlaceSapreeBet />
      <BottomNavigation />
    </div>
  );
}
