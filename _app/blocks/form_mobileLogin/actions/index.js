import { useEffect, useState } from "react";
import { senOtpToPhone, confirmOtp } from "../../../../_auth/phoneauth";

export default function State() {
  const [userPhone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [pageState, setPageState] = useState(1);
  const [halt, setHalt] = useState(false);
  const [error, setError] = useState(false);

  const [appVerifier, setVerifier] = useState(undefined);
  const [confirmResult, setConfirmResult] = useState(undefined);

  function setButton(data, id) {
    if (id === "appVerifier") {
      setVerifier(data);
    }
    if (halt) return;
    if (id === "phone_number") {
      var x = data.trim();
      x = x.replace(" ", "");
      if (x.length > 10) {
        return;
      }
      setPhone(x);
      return;
    }
    if (id === "user_otp") {
      setOtp(data);
      return;
    }
    if (id === "submit_button") {
      if (pageState === 1) {
        const phoneNumber = Number(userPhone) || 0;
        if (phoneNumber < 1000000000 || phoneNumber > 9999999999) {
          createError("enter a valid phone number");
          return;
        }
        const numString = "+91" + userPhone;
        setHalt(true);
        setButtonState("loading");
        senOtpToPhone(numString, appVerifier, handleAuth);
        return;
      }
      if (pageState === 2) {
        // verify the otp length
        if (otp.length === 6) {
          setHalt(true);
          setButtonState("loading");
          confirmOtp(otp, confirmResult, handleOtp);
        } else {
          createError("please enter otp");
        }
      }
    }
  }

  function createError(text, isButton) {
    console.log(text);
    console.log(typeof text);
    setError(String(text));
    isButton ? setButtonState("error") : "";
    setTimeout(() => {
      setButtonState("default");
      setHalt(false);
      setError(false);
    }, 3000);
  }
  function createSuccess() {
    setButtonState("success");
    setTimeout(() => {
      //
    }, 4000);
  }
  function handleAuth(obj) {
    console.log("exec obj", obj);
    const { smsSent, error, result, log } = obj;
    setConfirmResult(result);
    if (error) {
      createError(log, true);
      return;
    }
    if (smsSent) {
      setPageState(2);
      setButtonState("default");
      setHalt(false);
    }
  }
  function handleOtp(obj) {
    const { error, log } = obj;
    if (error) {
      createError(log, true);
    } else {
      createSuccess();
    }
  }
  return {
    setButton,
    props: {
      buttonState,
      error,
      userPhone,
      pageState,
    },
  };
}
