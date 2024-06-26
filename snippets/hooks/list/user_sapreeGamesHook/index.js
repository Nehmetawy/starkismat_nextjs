import useSWRImmutable from "swr/immutable";
import useAppstate from "@/snippets/hooks/golbalApp";
import { Get_UserrvgGames_fetch } from "@/snippets/utils/axios/get_rvgUserGame";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useEffect, useState } from "react";

const url = getUrl("getUserSapreeGames");

function selection(state) {
  return {
    token: state.firebaseToken,
    ping: state.appSapreeUserGames,
    lastFetch: state.userSapreeLastFetch,
  };
}

export default function App_UsersapreeGameHook({ claimed = false }) {
  const { ping, token, lastFetch } = useAppstate(selection);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date().getTime());

  const payload = {
    claimed: claimed,
  };

  useEffect(() => {
    getData();
  }, [token]);

  // I want to fetch the data at the right time as well
  function getData(bool) {
    if (!token) return;
    const timeNew = new Date().getTime();
    if (Math.abs(timeNew - lastFetch) > 60000 || bool) {
      setTime(timeNew);
      setLoading(true);
      Get_UserrvgGames_fetch(url, token, payload, handler);
    }
  }

  function handler({ error, success, log, data }) {
    setLoading(false);
    if (error) {
      setError(log);
    }
    if (success) {
      ping(data, claimed, time);
    }
  }
  return {
    props: {
      loading,
      error,
    },
    get: getData,
  };
}
