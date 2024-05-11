import { BottomNavigation, ProfileCard, Gap } from "@/snippets/components";
import { ProfileNav } from "@/snippets/blocks";

export default function Profile() {
  return (
    <div>
      <ProfileCard />
      <Gap h={30} />
      <ProfileNav />
      <BottomNavigation />
    </div>
  );
}
