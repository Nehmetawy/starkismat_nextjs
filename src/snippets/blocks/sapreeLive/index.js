import { DivExpand } from "@/snippets/components";
import { useAppstate } from "@/snippets/hooks/golbalApp";
import RenderLiveItems from "./renderItems";
import SapreeLiveHook from "@/snippets/hooks/sapreeLiveHook";

export default function SapreeLive() {
  const { liveBets, set } = SapreeLiveHook();

  return (
    <DivExpand isOpen={liveBets?.length || false} isNeuo={false}>
      <RenderLiveItems data={liveBets} ping={set} />
    </DivExpand>
  );
}
