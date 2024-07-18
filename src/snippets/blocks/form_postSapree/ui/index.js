import css from "./css.module.css";
import Cancel from "./cancelButton";
import { BetOnButton, MoneyOptions } from "./buttonRender";
import {
  Input,
  Gap,
  Button,
  ErrorCard,
  DivExpand,
} from "@/snippets/components";

const inpProps = {
  type: "number",
  text: "amount",
  id: "amount",
};

export default function FORMUI({ toggle, betOnId, set, props }) {
  function cancelClick() {
    toggle(false, true);
  }

  return (
    <div>
      <div className={css.formCont}>
        <Gap h={10} />
        <Cancel onClick={cancelClick} />
        <BetOnButton onId={betOnId} />
        <Gap h={5} />
        <div className={css.optionsGrid}>
          <MoneyOptions amount={5} set={set} />
          <MoneyOptions amount={10} set={set} />
          <MoneyOptions amount={15} set={set} />
          <MoneyOptions amount={20} set={set} />
          <MoneyOptions amount={40} set={set} />
          <MoneyOptions amount={50} set={set} />
          <MoneyOptions amount={70} set={set} />
          <MoneyOptions amount={100} set={set} />
        </div>
        <Input {...inpProps} val={props.amount} getValue={set} />
        <Gap h={20} />
        <Button id="submit_button" click={set} state={props.buttonState} />
        <Gap h={15} />
        <DivExpand isOpen={props.error} isNeuo={false}>
          <ErrorCard text={props.error} />
        </DivExpand>
      </div>
    </div>
  );
}
