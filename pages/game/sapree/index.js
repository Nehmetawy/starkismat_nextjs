import { BottomNavigation, SapreeGame } from "@/snippets/components";
import { FormPlaceSapreeBet } from "@/snippets/blocks";

export default function Profile() {
  return (
    <div>
      <SapreeGame />
      <FormPlaceSapreeBet />
      <BottomNavigation />
    </div>
  );
}
