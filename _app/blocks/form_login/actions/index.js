import { useEffect, useState } from "react";
import { createNewEmailPassword } from "../../../../_auth/email_pass/emailauth";

export default function State() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [halt, setHalt] = useState(false);
  const [error, setError] = useState(false);

  function setButton(data, id) {
    if (halt) return;

    if (id === "user_email") {
      setEmail(data);
      return;
    }

    if (id === "user_password") {
      setPassword(data);
      return;
    }

    if (id === "submit_button") {
      if (buttonState !== "default") {
        return;
      }
      setButtonState("loading");
      createNewEmailPassword(email, password, handleLogin);
    }
  }

  function handleLogin(errorMessage) {
    if (errorMessage) {
      setButtonState("error");
      setError(errorMessage);
      setTimeout(() => {
        setButtonState("default");
        setError(false);
      }, 3000);
    } else {
      setButtonState("success");
      setHalt(true);
    }
  }

  return {
    setButton,
    props: {
      email,
      password,
      buttonState,
      error,
    },
  };
}
