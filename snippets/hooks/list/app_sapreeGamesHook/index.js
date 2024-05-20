import useSWRImmutable from "swr/immutable";
import useAppstate from "@/snippets/hooks/golbalApp";
import Get_rvgGames_fetcher, {
  Get_RvgGames_fetch,
} from "@/snippets/utils/axios/get_rvgGame";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useEffect, useState } from "react";
import { getBetId } from "@/snippets/utils/sapree";

const url = getUrl("getSapreeGames");

function selection(state) {
  return {
    token: state.firebaseToken,
    ping: state.setAppSapreeGames,
    lastFetch: state.sapreeLastFetch,
  };
}

export default function App_sapreeGameHook() {
  const { ping, token, lastFetch } = useAppstate(selection);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    getData();
  }, [token]);

  function getData(bool) {
    if (!token) return;
    const timeNew = new Date().getTime();
    if (Math.abs(timeNew - lastFetch) > 15000 || bool) {
      setTime(timeNew);
      setLoading(true);
      Get_RvgGames_fetch(url, token, handler);
    }
  }
  function handler({ error, success, log, data }) {
    setLoading(false);
    if (error) {
      setError(log);
    }
    if (success) {
      ping(data, time);
    }
  }

  return {
    props: {
      error,
      loading,
    },
    get: getData,
  };
}
