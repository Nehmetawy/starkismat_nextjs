import { BottomNavigation } from "../../_app/components";
import { Form_Profile, PageWrapper } from "../../_app/blocks";

import css from "../../css/main.module.css";

export default function PAGE() {
  return (
    <PageWrapper>
      <div className={css.page}>
        {/*  */}
        <Form_Profile />
        <BottomNavigation />
      </div>
    </PageWrapper>
  );
}
