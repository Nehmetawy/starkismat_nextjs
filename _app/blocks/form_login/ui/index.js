import css from "./main.module.css";
import { Input, Button, GapV, ErrorCard } from "../../../components";
import { DivExpand } from "../../../pannels";
import PhoneImg from "../../../../assets/images/phone.png";
import Image from "next/image";

export default function FORM({ props = {}, set = () => {} }) {
  const error = props.error;

  const isOpen = error ? true : false;
  return (
    <div className={css.formCont}>
      <GapV h={30} />
      <div className={css.imageCont}>
        <Image alt="" src={PhoneImg} className={css.image} />
      </div>
      <GapV h={60} />
      <Input
        type="text"
        text="user email"
        getValue={set}
        id="user_email"
        val={props.email}
      />
      <GapV h={30} />
      <Input
        type="text"
        text="password"
        getValue={set}
        id="user_password"
        val={props.password}
      />
      <GapV h={30} />
      <DivExpand isOpen={isOpen} isNeuo={false}>
        <ErrorCard text={error} />
      </DivExpand>
      <Button
        text="Submit"
        onClick={set}
        id="submit_button"
        state={props.buttonState}
      />
    </div>
  );
}
