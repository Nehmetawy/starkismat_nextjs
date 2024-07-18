"use client";

import { useState } from "react";
import { GenPostAPiCall, GlobalApp } from "@/snippets/hooks";

const selection = (state) => {
  return {
    updateUser: state.appUserPing,
  };
};

export default function BalanceFormHook() {
  const { updateUser } = GlobalApp(selection);
  const [amount, setAmount] = useState("");

  const { loading, error, post, manualError, apiState } = GenPostAPiCall({
    url: "userbalance",
    pong: handleApiResult,
  });

  function setButton(data, id) {
    if (loading) return;
    if (apiState !== "default") return;
    if (id === "amount") {
      setAmount(data);
      return;
    }
    if (id === "submit_button") {
      const data = {
        amount: Number(amount) || 0,
      };
      post(data);
    }
  }

  function handleApiResult(result) {
    console.log("hi");
    console.log("result", result);
  }
  return {
    set: setButton,
    props: {
      buttonState: apiState,
      error,
      amount,
    },
  };
}
