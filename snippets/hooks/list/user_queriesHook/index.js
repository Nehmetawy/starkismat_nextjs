import useSWRImmutable from "swr/immutable";
import useAppstate from "@/snippets/hooks/golbalApp";
import Get_userQueries_fetcher from "@/snippets/utils/axios/get_userQueries";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useEffect, useState } from "react";

const url = getUrl("getUserQueries");

function selection(state) {
  return {
    token: state.firebaseToken,
    ping: state.setUserQueries,
  };
}

export default function App_userQueriesHook() {
  const { ping, token } = useAppstate(selection);
  const [error, setError] = useState(false);

  const {
    data,
    error: fetchError,
    isLoading,
  } = useSWRImmutable([url, token], Get_userQueries_fetcher, {
    onErrorRetry: () => {},
    refreshInterval: 600000,
  });

  useEffect(() => {
    if (data) {
      const { message, tokenRefresh } = data;
      if (tokenRefresh) {
        return;
      }
      if (typeof message !== "string") {
        ping(message);
      }
    }
  }, [data]);
  // if the hook is active
  // I want to fetch the data at the right time as well
  return {
    isLoading,
  };
}
