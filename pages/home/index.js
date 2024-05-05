import { BottomNavigation } from "../../_app/components";
import css from "../../css/main.module.css";
import { PageWrapper } from "../../_app/blocks";

export default function PAGE() {
  return (
    <PageWrapper>
      <div className={css.page}>
        <BottomNavigation />
      </div>
    </PageWrapper>
  );
}
