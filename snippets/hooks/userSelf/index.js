import { useState, useEffect } from "react";
import useAppstate from "@/snippets/hooks/golbalApp";
import { getUrl } from "@/snippets/utils/axios/_config";
import Get_userSelf_fetcher from "@/snippets/utils/axios/get_userSelf";
const url = getUrl("getUserSelf");

function selection(state) {
  return {
    token: state.firebaseToken,
    ping: state.appUserHook,
    lastFetch: state.userLastFetch,
  };
}

export default function UserSelf_HOOK() {
  const { token, ping, lastFetch } = useAppstate(selection);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    getData(false);
  }, [token]);

  function getData(bool) {
    if (!token) return;
    const timeNew = new Date().getTime();
    if (Math.abs(timeNew - lastFetch) > 60000 || bool) {
      setTime(timeNew);
      setLoading(true);
      Get_userSelf_fetcher(url, token, handler);
    } else {
      return;
    }
  }

  function handler({ error, success, log, user, tokenRefresh }) {
    setLoading(false);

    if (error) {
      setError(log);
      if (tokenRefresh) {
        //
      }
    }
    if (success) {
      ping(user, time);
    }
  }
  return {
    get: getData,
    props: {
      loading,
      error,
    },
  };
}
