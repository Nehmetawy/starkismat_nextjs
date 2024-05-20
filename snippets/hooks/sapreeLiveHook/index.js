import { useAppstate } from "@/snippets/hooks/golbalApp";
import { useState } from "react";
import { getUrl } from "@/snippets/utils/axios/_config";
import Get_UserrvgGameResult_fetcher from "@/snippets/utils/axios/get_rvgUserResult";

const url = getUrl("getSapreeResult");

function selection(state) {
  return {
    liveBets: state.liveBet,
    setLiveBets: state.setLiveBet,
    token: state.firebaseToken,
  };
}

export default function SapreeLiveHook() {
  const { liveBets, setLiveBets, token } = useAppstate(selection);

  const [identifier, setIdentifier] = useState(false);
  const [halt, setHalt] = useState(false);
  const [state, setState] = useState("default");

  function set(data, id) {
    console.log(data, id);
    return;
    if (halt) return;
    if (id === "get_result") {
      setHalt(true);
      const payload = {};
      Get_UserrvgGameResult_fetcher(url, token, payload, axiosHandler);
    }
  }

  function axiosHandler({ success, error, message }) {
    if (success) {
      createSuccess();
      return;
    }
    if (error) {
      createError(message);
      return;
    }
  }
  function createSuccess() {
    setState("success");
    setTimeout(() => {
      setState("default");
      setHalt(false);
    }, 3000);
  }
  function createError() {
    setState("error");
    setTimeout(() => {
      setState("default");
      setHalt(false);
    }, 3000);
  }

  return {
    liveBets,
    set,
  };
}
