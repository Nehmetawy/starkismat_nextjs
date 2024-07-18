import React from "react";
import { ProfileCard, SapreeGame, Gap, BottomNav } from "@/snippets/components";
import { FormPostSapreeBet } from "@/snippets/blocks";

function page() {
  return (
    <div>
      <ProfileCard />
      <Gap h={15} />
      <SapreeGame />
      <Gap h={10} />
      <FormPostSapreeBet />
      <BottomNav />
    </div>
  );
}

export default page;
