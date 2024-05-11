import useSWRImmutable from "swr/immutable";
import useAppstate from "@/snippets/hooks/golbalApp";
import Get_UserrvgGames_fetcher from "@/snippets/utils/axios/get_rvgUserGame";
import { getUrl } from "@/snippets/utils/axios/_config";
import { useEffect, useState } from "react";

const url = getUrl("getUserSapreeGames");

function selection(state) {
  return {
    token: state.firebaseToken,
    ping: state.appSapreeUserGames,
  };
}

export default function App_UsersapreeGameHook({ claimed = false }) {
  const { ping, token } = useAppstate(selection);
  const [error, setError] = useState(false);

  const payload = {
    claimed: claimed,
  };

  const {
    data,
    error: fetchError,
    isLoading,
  } = useSWRImmutable([url, token, payload], Get_UserrvgGames_fetcher, {
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
        ping(message, claimed);
      }
    }
  }, [data]);
  // if the hook is active
  // I want to fetch the data at the right time as well
  return {
    isLoading,
  };
}
