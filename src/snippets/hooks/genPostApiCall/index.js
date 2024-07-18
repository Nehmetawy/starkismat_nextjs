"use client";

import { useState } from "react";
import { GlobalApp } from "@/snippets/hooks";
import { getApiEndUrl } from "@/snippets/utils/axios/_config";
import axios from "axios";

// select target things
// handle apiCall error, loading state and fetch time and interval

export default function GenPostAPiCall({ url = "", pong = () => {} }) {
  const token = GlobalApp((state) => state.firebaseToken);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiState, setApiState] = useState("default");

  const apiUrl = getApiEndUrl(url);

  function postData(data) {
    if (!data) return;
    if (loading) return;
    if (apiState !== "default") return;

    setLoading(true);
    setApiState("loading");

    const header = { Authorization: `Bearer ${token}` };
    if (!apiUrl) return;
    console.log("data", data);
    console.log("apiUrl", apiUrl);
    axios
      .post(apiUrl, data, { headers: header })
      .then((res) => handler(res.data))
      .catch((Error) => {
        console.log("Error", Error);
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
      setApiState("error");
      setTimeout(() => {
        setApiState("default");
        setError(false);
      }, 3000);
    }

    if (success) {
      pong(data);
      setApiState("success");
      setTimeout(() => {
        setApiState("default");
        setError(false);
      }, 3000);
    }
  }
  function manualError(log) {
    setError(log);
    setApiState("error");
    setTimeout(() => {
      setApiState("default");
      setError(false);
    }, 3000);
  }

  return {
    loading,
    error,
    apiState: apiState,
    post: postData,
    manualError: manualError,
  };
}
