import { BottomNavigation, Sapree } from "../../_app/components";
import { PageWrapper } from "../../_app/blocks";

import css from "../../css/main.module.css";
import {
  LudoBoard,
  Button,
  Input,
  SapreeLiveBet,
  List,
} from "../../_app/components";
import { Form_SapreeBet } from "../../_app/blocks";

export default function PAGE() {
  return (
    <PageWrapper>
      <div className={css.page}>
        <Sapree />
        {/* <SapreeLiveBet /> */}
        <Form_SapreeBet />
        <BottomNavigation />
      </div>
    </PageWrapper>
  );
}
