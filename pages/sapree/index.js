import { BottomNavigation, Sapree, GapV } from "../../_app/components";
import { PageWrapper } from "../../_app/blocks";

import css from "../../css/main.module.css";
import { SapreeLiveBet } from "../../_app/components";
import { Form_SapreeBet } from "../../_app/blocks";
import {
  SapreeGameList,
  SapreeUserList,
} from "../../_app/components/list_group";

export default function PAGE() {
  return (
    <PageWrapper>
      <div className={css.page}>
        <Sapree />
        {/* <SapreeLiveBet /> */}
        <Form_SapreeBet />

        {/* now for  */}
        <GapV h={50} />
        <SapreeGameList />
        <GapV h={50} />
        <SapreeUserList />
        <GapV h={150} />
        <BottomNavigation />
      </div>
    </PageWrapper>
  );
}
