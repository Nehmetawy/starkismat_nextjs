import axios from "axios";

// this
export default function Get_userSelf_fetcher(url, firebaseToken, handler) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  return axios
    .get(url, { headers: header })
    .then((res) => {
      const data = res.data;
      console.log(data);
      handler(data);
    })
    .catch((err) => {
      console.log("err", err);
      handler({
        error: true,
        success: false,
        log: "network error",
      });
    });
}

export function Get_userSelf_fetcher_SWR([url, firebaseToken, handler]) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  return axios
    .get(url, { headers: header })
    .then((res) => {
      const data = res.data;
      console.log(data);
      handler(data);
    })
    .catch((err) => {
      console.log("err", err);
      handler({
        error: true,
        success: false,
        log: "network error",
      });
    });
}
