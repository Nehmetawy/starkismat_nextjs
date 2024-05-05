import UI from "./ui";
import { useUIstate } from "../../../_appState/componentState";
import { DivExpand } from "../../pannels";

function selection(state) {
  return {
    isOpen: state.issapreeformopen,
    toggle: state.togglesapreeform,
    buttonId: state.selectedsapreebutton,
  };
}

export default function FORM_SAPREEBET() {
  const { isOpen, toggle, buttonId } = useUIstate(selection);

  return (
    <DivExpand isOpen={isOpen}>
      <UI toggle={toggle} button={buttonId} />
    </DivExpand>
  );
}
