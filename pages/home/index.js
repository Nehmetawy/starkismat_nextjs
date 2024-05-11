import { BottomNavigation, ProfileCard } from "@/snippets/components";
import { GamesList } from "@/snippets/blocks";

export default function Profile() {
  return (
    <div>
      <ProfileCard />
      <GamesList />
      <BottomNavigation />
    </div>
  );
}
