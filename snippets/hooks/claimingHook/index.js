import { useState, useEffect } from "react";
import useAppstate from "@/snippets/hooks/golbalApp";
import { getUrl } from "@/snippets/utils/axios/_config";
import { CLAIM_USER_RVG } from "@/snippets/utils/axios/claim_userRvgBet";

function selection(state) {
  return {
    currentClaiming: state.currentClaiming,
    token: state.firebaseToken,
    claimLoading: state.claimLoading,
  };
}

const url = getUrl("claimSapreeBet");

export default function ClaimingHook() {
  const { currentClaiming, token, claimLoading } = useAppstate(selection);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function execClaim(item) {
    if (!token) return;
    if (loading || claimLoading) return;
    //
    console.log(item);
    const data = item;
    const payload = {};
    CLAIM_USER_RVG(url, payload, token, handler);
  }

  function handler({ error, success, log, user, tokenRefresh }) {
    if (error) {
    }
    if (success) {
    }
  }

  return {
    execClaim,
    props: {
      loading,
    },
  };
}
