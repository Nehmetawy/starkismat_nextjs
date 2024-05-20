import {
  BottomNavigation,
  DropDown,
  Gap,
  ProfileCard,
} from "@/snippets/components";
import { ListBlock } from "@/snippets/blocks";
import { useAppUIState } from "@/snippets/hooks/globalUi";
export default function Profile() {
  const selectedListId = useAppUIState((state) => state.selectedListId);

  return (
    <div>
      <ProfileCard />
      <Gap h={20} />
      <DropDown />
      <Gap h={20} />
      <ListBlock selectedListId={selectedListId} />
      <Gap h={200} />
      <BottomNavigation />
    </div>
  );
}
