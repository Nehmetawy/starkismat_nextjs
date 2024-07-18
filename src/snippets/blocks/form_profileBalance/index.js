"use client";
import css from "./css.module.css";
import {
  Gap,
  Input,
  Button,
  ErrorCard,
  DivExpand,
} from "@/snippets/components";
import { formHooks } from "@/snippets/hooks";

export default function ProfileBalanceForm() {
  const { set, props } = formHooks.userBalance();

  return (
    <div>
      <Gap h={20} />
      <div className={css.placeholder}>Name</div>
      <Gap h={8} />
      <Input
        id="amount"
        text="Amount"
        val={props.amount}
        getValue={set}
        type="number"
      />
      <Gap h={30} />
      <Button id="submit_button" state={props.buttonState} click={set} />
      <Gap h={30} />
      <DivExpand isOpen={props.error} isNeuo={false}>
        <ErrorCard text={props.error} />
      </DivExpand>
    </div>
  );
}
