import { useState, useEffect } from "react";
import { getBetId } from "@/snippets/utils/sapree";
import { POST_GAME_RVG } from "@/snippets/utils/axios/post_rvgBet";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useAppstate } from "@/snippets/hooks/golbalApp";
import { useAppUIState } from "../globalUi";

const url = getUrl("postSapreeBet");

const selection = (state) => {
  return {
    token: state.firebaseToken,
    setLiveBet: state.setLiveBet,
    userBalanceChange: state.userBalanceChange,
    placedBetOn: state.placedBetOn,
  };
};

const uiToggle = (state) => {
  return {
    onid: state.selectedsapreebutton,
    togglesapreeform: state.togglesapreeform,
  };
};

/**
  do not allow multiple

 */

export default function SapreeFormHook() {
  const { onid, togglesapreeform } = useAppUIState(uiToggle);
  const { token, setLiveBet, userBalanceChange, placedBetOn } =
    useAppstate(selection);
  const [betOnNum, setBetOnNum] = useState(onid);
  const [amount, setAmount] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [error, setError] = useState(false);
  const [halt, setHalt] = useState(false);

  useEffect(() => {
    setBetOnNum(onid);
  }, [onid]);

  function setButton(data, id) {
    // if (!token) return;
    if (halt) return;
    //
    if (id === "amount") {
      setAmount(data);
      return;
    }
    //
    if (id === "submit_button") {
      const { betId, isLocked } = getBetId();
      if (placedBetOn === betId) {
        createError("cannot place multiple bets");
        return;
      }
      if (isLocked) {
        createError("cannot place order, bet is locked");
        return;
      }
      setHalt(true);
      setButtonState("loading");
      const data = {
        contractamount: Number(amount),
        betid: betId,
        onid: Number(onid),
      };

      POST_GAME_RVG(url, data, token, handleAxiosAfter);
    }
  }

  function handleAxiosAfter({ success, error, log, id }) {
    if (error) {
      createError(log);
      return;
    }
    if (success) {
      createSuccess(id);
      return;
    }
  }

  function createError(text) {
    setButtonState("error");
    setError(text);

    setTimeout(() => {
      setButtonState("default");
      setError(false);
      setHalt(false);
      togglesapreeform("", true);
    }, 3000);
  }

  function createSuccess(id) {
    setButtonState("success");
    const { betId } = getBetId();

    userBalanceChange(Number(amount));

    setLiveBet({
      betid: betId,
      amount: amount,
      onid: betOnNum,
      id: id,
    });

    setTimeout(() => {
      setButtonState("default");
      setError(false);
      setHalt(false);
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
