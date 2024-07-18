import { useState, useEffect } from "react";
import { GlobalApp } from "@/snippets/hooks";
import { getApiEndUrl } from "@/snippets/utils/axios/_config";
import axios from "axios";

// select target things
// handle apiCall error, loading state and fetch time and interval

function checkGap(timeNow, globalState) {
  return (
    Math.abs(timeNow - globalState?.api?.lastFetch || 1) <
    (globalState?.api?.fetchGap || 60000)
  );
}

export default function GenAPiCall({
  url = "",
  globalKeys = [],
  params = {},
  pong,
}) {
  const token = GlobalApp((state) => state.firebaseToken);
  const globalState = GlobalApp(selection);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeNow, setTimeNow] = useState(new Date().getTime());

  const apiUrl = getApiEndUrl(url);

  // aviater
  // color
  // 3 pati
  //
  useEffect(() => {
    getData(false);
  }, [token]);

  useEffect(() => {
    getData(true);
  }, [globalState.api.refreshToken]);

  function getData(bool, data) {
    if (!bool) return;
    if (checkGap(timeNow, globalState)) return;
    if (loading) return;
    setLoading(true);
    const header = { Authorization: `Bearer ${token}` };
    const _params = data ? data : params;
    if (!apiUrl) return;
    axios
      .get(apiUrl, { headers: header, params: _params })
      .then((res) => handler(res.data))
      .catch(() => {
        handler({
          error: true,
          log: "error fetching data",
        });
      });
  }

  function handler({ error, success, log, data }) {
    setLoading(false);
    if (error) {
      setError(log);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (success) {
      const timeNew = new Date().getTime();
      if (pong) {
        pong(data, timeNew);
      }
      if (globalState.ping) {
        globalState.ping(data, timeNew);
      }
    }
  }

  function selection(state) {
    const keys = Object.keys(globalKeys);
    const obj = {};
    keys.map((k) => {
      obj[k] = state[globalKeys[k]];
    });
    return obj;
  }
  return {
    loading,
    error,
    getData,
  };
}
