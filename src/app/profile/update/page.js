import React from "react";
import { Gap, BottomNav, BackNavigation } from "@/snippets/components";
import { ProfileUpdateForm } from "@/snippets/blocks";

function page() {
  return (
    <div>
      <BackNavigation title="Go Back !" />
      <Gap h={25} />
      <ProfileUpdateForm />
      <BottomNav />
    </div>
  );
}

export default page;
