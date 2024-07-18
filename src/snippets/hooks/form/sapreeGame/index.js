"use client";

import { useState, useEffect } from "react";
import { getBetId } from "@/snippets/utils/sapree";
import { GenPostAPiCall, GlobalUI, GlobalApp } from "@/snippets/hooks";

const uiToggle = (state) => {
  return {
    onid: state.selectedsapreebutton,
    togglesapreeform: state.togglesapreeform,
  };
};

const selection = (state) => {
  return {
    setLiveBet: state.setLiveRvgBet,
    userBalanceChange: state.userBalanceChange,
    placedBetOn: state.placedBetOn,
  };
};

export default function SapreeFormHook() {
  //
  const { onid, togglesapreeform } = GlobalUI(uiToggle);
  const { setLiveBet, userBalanceChange, placedBetOn } = GlobalApp(selection);
  const [betOnNum, setBetOnNum] = useState(onid);
  const [amount, setAmount] = useState("");

  const { loading, error, post, manualError, apiState } = GenPostAPiCall({
    url: "postUserRvg",
    pong: handleApiResult,
  });

  useEffect(() => {
    setBetOnNum(onid);
  }, [onid]);

  function setButton(data, id) {
    if (loading) return;
    if (apiState !== "default") return;
    if (id === "amount") {
      setAmount(data);
      return;
    }
    if (id === "submit_button") {
      const { betId, isLocked } = getBetId();
      if (isLocked) {
        manualError("cannot place order, bet is locked");
        return;
      }

      if (placedBetOn === betId) {
        createError("cannot place multiple bets");
        return;
      }

      const data = {
        contractamount: Number(amount),
        betid: betId,
        onid: Number(onid),
      };
      post(data);
    }
  }
  function handleApiResult() {
    const { betId } = getBetId();
    userBalanceChange(Number(amount));
    setLiveBet({
      betid: betId,
      amount: amount,
      onid: betOnNum,
      id: id,
    });
  }
  return {
    set: setButton,
    props: {
      amount,
      buttonState: apiState,
      error,
    },
  };
}
