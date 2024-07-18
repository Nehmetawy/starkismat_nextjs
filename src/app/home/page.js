import React from "react";
import { ProfileCard, GamesList, Gap, BottomNav } from "@/snippets/components";

function page() {
  return (
    <div>
      <ProfileCard />
      <Gap h={5} />
      <GamesList />
      <BottomNav />
    </div>
  );
}

export default page;
