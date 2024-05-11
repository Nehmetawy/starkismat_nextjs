import { useState } from "react";
import { useAppUIState } from "@/snippets/hooks/globalUi";
import { getBetId } from "@/snippets/utils/sapree";
import { POST_GAME_RVG } from "@/snippets/utils/axios/post_rvgBet";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useAppstate } from "@/snippets/hooks/golbalApp";

const url = getUrl("postSapreeBet");

export default function SapreeFormHook() {
  const token = useAppstate((state) => state.firebaseToken);
  const onid = useAppUIState((state) => state.selectedsapreebutton);

  const [amount, setAmount] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [error, setError] = useState(false);
  const [halt, setHalt] = useState(false);

  function setButton(data, id) {
    if (halt) return;
    //
    if (id === "amount") {
      setAmount(data);
      return;
    }
    if (id === "submit_button") {
      const { betId, isLocked } = getBetId();
      //
      if (isLocked) {
        createError("cannot place order, bet is locked");
        return;
      }
      setHalt(true);
      setButton("loading");
      const data = {
        contractamount: Number(amount),
        betid: betId,
        onid: Number(onid),
      };
      //
      POST_GAME_RVG(url, data, token, handleAxiosAfter);
    }
  }
  function handleAxiosAfter({ success, error, message }) {
    setHalt(false);
    if (error) {
      createError(message);
      return;
    }
    if (success) {
      createSuccess();
      return;
    }
  }
  function createError(text) {
    setButtonState("error");
    setError(text);
    setTimeout(() => {
      setButtonState("default");
      setError(false);
    }, 3000);
  }
  function createSuccess() {
    setButtonState("success");
    setTimeout(() => {
      setButtonState("default");
    }, 3000);
  }
  return {
    set: setButton,
    props: {
      amount,
      buttonState,
      error,
    },
  };
}
