import { BottomNavigation } from "../../_app/components";
import { Profile_Nav, PageWrapper } from "../../_app/blocks";

import css from "../../css/main.module.css";

export default function PAGE() {
  return (
    <PageWrapper>
      <div className={css.page}>
        <Profile_Nav />
        <BottomNavigation />
      </div>
    </PageWrapper>
  );
}
