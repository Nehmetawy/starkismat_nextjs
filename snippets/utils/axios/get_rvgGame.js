import axios from "axios";

// this
export default function Get_rvgGames_fetcher([url, firebaseToken]) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  return axios.get(url, { headers: header }).then((res) => {
    return res.data;
  });
}

export function Get_RvgGames_fetch(url, token, handler) {
  const header = { Authorization: `Bearer ${token}` };
  return axios
    .get(url, { headers: header })
    .then((res) => {
      const data = res.data;
      handler(data);
    })
    .catch((err) => {
      handler({
        error: true,
        success: false,
        log: "error fetching data",
      });
    });
}
