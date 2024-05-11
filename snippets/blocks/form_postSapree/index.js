import { useAppUIState } from "@/snippets/hooks/globalUi";
import { DivExpand } from "@/snippets/components";
import FORMUI from "./ui";
import SapreeFormHook from "@/snippets/hooks/sapreeGameForm";

function selection(state) {
  return {
    isOpen: state.issapreeformopen,
    toggle: state.togglesapreeform,
    betOnId: state.selectedsapreebutton,
  };
}
export default function FormPlaceSapreeBet() {
  const { isOpen, toggle, betOnId } = useAppUIState(selection);
  const { set, props } = SapreeFormHook();
  return (
    <DivExpand isOpen={isOpen}>
      <FORMUI toggle={toggle} betOnId={betOnId} set={set} props={props} />
    </DivExpand>
  );
}
