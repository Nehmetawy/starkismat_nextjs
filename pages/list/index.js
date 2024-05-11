import { BottomNavigation, DropDown, Gap } from "@/snippets/components";
import { ListBlock } from "@/snippets/blocks";
import { useAppUIState } from "@/snippets/hooks/globalUi";
export default function Profile() {
  const selectedListId = useAppUIState((state) => state.selectedListId);

  return (
    <div>
      <DropDown />
      <Gap h={20} />
      <ListBlock selectedListId={selectedListId} />
      <Gap h={200} />
      <BottomNavigation />
    </div>
  );
}
