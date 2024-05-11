import { useEffect } from "react";
import css from "./css.module.css";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/_auth/firebase";
import Image from "next/image";
import PhoneImg from "@/assets/images/phone.png";
import OtpInput from "./otpInput";
import {
  DivExpand,
  ErrorCard,
  Gap,
  Button,
  PhoneInput,
} from "@/snippets/components";

const buttonTextDestr = {
  1: "Send Otp",
  2: "Submit Otp",
  3: "",
};
const headingtextDestro = {
  1: "Phone Number",
  2: "Enter Otp",
};

export default function LoginFormUI({ props = {}, set = () => {} }) {
  const error = props.error;
  const isOpen = error ? true : false;
  const buttonText = buttonTextDestr[props.pageState];
  const headingText = headingtextDestro[props.pageState];
  const isOtpBox = props.pageState === 2;

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
      callback: (response) => {
        // console.log("response", response);
      },
    });
    set(window.recaptchaVerifier, "appVerifier");
  }, []);

  return (
    <div className={css.formCont}>
      <Gap h={30} />
      <div className={css.imageCont}>
        <Image alt="" src={PhoneImg} className={css.image} />
      </div>
      <Gap h={30} />
      <div className={css.formHeading}>{headingText}</div>
      <Gap h={10} />

      {!isOtpBox && (
        <PhoneInput
          type="number"
          text="phone number"
          getValue={set}
          id="phone_number"
          val={props.userPhone}
        />
      )}
      {isOtpBox && <OtpInput getValue={set} />}
      <div id="recaptcha"></div>
      <Gap h={30} />
      <DivExpand isOpen={isOpen} isNeuo={false}>
        <ErrorCard text={error} />
      </DivExpand>
      <Button
        text={buttonText}
        click={set}
        id="submit_button"
        state={props.buttonState}
      />
    </div>
  );
}
