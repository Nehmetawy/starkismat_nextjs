"use client";
import { GlobalUI } from "@/snippets/hooks";
import { DivExpand } from "@/snippets/components";
import FORMUI from "./ui";
import { formHooks } from "@/snippets/hooks";

function selection(state) {
  return {
    isOpen: state.issapreeformopen,
    toggle: state.togglesapreeform,
    betOnId: state.selectedsapreebutton,
  };
}
export default function FormPlaceSapreeBet() {
  const { isOpen, toggle, betOnId } = GlobalUI(selection);
  const { set, props } = formHooks.sapree();

  return (
    <DivExpand isOpen={isOpen}>
      <FORMUI toggle={toggle} betOnId={betOnId} set={set} props={props} />
    </DivExpand>
  );
}
