import css from "./main.module.css";
import { InputPhone, Button, GapV, ErrorCard } from "../../../components";
import { DivExpand } from "../../../pannels";
import PhoneImg from "../../../../assets/images/phone.png";
import Image from "next/image";
import OtpInput from "./otpInput";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../../../../_auth/firebase";
import { useEffect } from "react";

const buttonTextDestr = {
  1: "Send Otp",
  2: "Submit Otp",
  3: "",
};
const headingtextDestro = {
  1: "Phone Number",
  2: "Enter Otp",
};

export default function FORM({ props = {}, set = () => {} }) {
  const error = props.error;

  const isOpen = error ? true : false;
  const buttonText = buttonTextDestr[props.pageState];
  const headingText = headingtextDestro[props.pageState];
  const isOtpBox = props.pageState === 2;
  // ----------------------------------------------------
  // ----------------------------------------------------
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
      callback: (response) => {
        console.log("response", response);
      },
    });
    set(window.recaptchaVerifier, "appVerifier");
  }, []);

  // ----------------------------------------------------
  // ----------------------------------------------------
  return (
    <div className={css.formCont}>
      <GapV h={30} />
      <div className={css.imageCont}>
        <Image alt="" src={PhoneImg} className={css.image} />
      </div>
      <GapV h={30} />
      <div className={css.formHeading}>{headingText}</div>
      <GapV h={10} />

      {!isOtpBox && (
        <InputPhone
          type="number"
          text="phone number"
          getValue={set}
          id="phone_number"
          val={props.userPhone}
        />
      )}
      {isOtpBox && <OtpInput getValue={set} />}
      <div id="recaptcha"></div>
      <GapV h={30} />
      <DivExpand isOpen={isOpen} isNeuo={false}>
        <ErrorCard text={error} />
      </DivExpand>
      <Button
        text={buttonText}
        onClick={set}
        id="submit_button"
        state={props.buttonState}
      />
    </div>
  );
}
