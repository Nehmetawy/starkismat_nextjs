import React from "react";
import { ProfileCard, Gap, BottomNav } from "@/snippets/components";
import { ProfileNav } from "@/snippets/blocks";

function page() {
  return (
    <div>
      <ProfileCard />
      <Gap h={25} />
      <ProfileNav />
      <BottomNav />
    </div>
  );
}

export default page;
