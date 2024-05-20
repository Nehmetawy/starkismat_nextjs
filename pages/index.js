import { BottomNavigation, ProfileCard } from "@/snippets/components";
import { GamesList, FormPhoneLogin } from "@/snippets/blocks";

export default function Profile() {
  return (
    <div>
      <ProfileCard />
      <GamesList />
      <BottomNavigation />
    </div>
  );
}
