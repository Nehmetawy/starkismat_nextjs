import { useState, useEffect } from "react";
import { GlobalApp, GenAPiCall } from "@/snippets/hooks";
import { getApiEndUrl } from "@/snippets/utils/axios/_config";
import axios from "axios";
var _ = require("lodash");

export default function GenListCall({ url = "", listid = "", listapiid = "" }) {
  const token = GlobalApp((state) => state.firebaseToken);
  const [timeNow, setTimeNow] = useState(new Date().getTime());
  const { listObj, apiProps } = GlobalApp(selection);
  const [displayData, setDisplayData] = useState([]);
  // related to loading
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const apiUrl = getApiEndUrl(url);
  // related to showing
  const [page, setPage] = useState(1);

  function getDataCall(_p) {
    if (loading) return;
    setLoading(true);
    const _params = _p ? p : {};

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

  /**
   * handle api request results
   */
  function handler({ error, success, log, data }) {
    setLoading(false);
    if (error) {
      setError(log);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (success) {
      handleIncomingData(data);
    }
  }

  function showData(dir) {
    if (dir) {
      var newPage = dir > 0 ? page + 1 : page - 1;
      newPage = newPage < 1 ? 1 : page;
    } else {
      setPage(1);
    }
    // now show the data
    const index1 = (page - 1) * 10;
    const index2 = index1 + 10;
    const toshow = _.slice(listObj.cache, index1, index2);
    // now check if data is present or not
    if (show.length < 10) {
      // load the data for that page
      const offset = page - 1 * 10;
      // load the data
      getDataCall({
        offset: offset,
      });
    } else {
      setDisplayData(toshow);
    }
  }

  // add the data to the object
  function handleIncomingData(data) {
    const isArray = Array.isArray(data);
    if (!isArray) return;
    const oldData = listObj.cache;
    const newData = [...oldData, ...data];
    const filtered = [];
    _.forEach(newData, (o) => {
      const isin = _.includes(filtered, (i) => {
        return i[apiProps.identifier] === o[apiProps.identifier];
      });
      if (isin) return;
      filtered.push(o);
    });
    const ordered = _.orderBy(filtered, apiProps.identifier, "desc");
    listObj.addMore(ordered);
  }

  // selecting important info from global state
  function selection(state) {
    return {
      listObj: state[listid],
      apiProps: state[listapiid],
    };
  }
  return { error, loading, getData: getDataCall, show: showData };
}
