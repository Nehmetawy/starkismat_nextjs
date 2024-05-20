import axios from "axios";

// this
export default function Get_UserrvgGames_fetcher([
  url,
  firebaseToken,
  payload,
]) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  return axios.get(url, { headers: header, params: payload }).then((res) => {
    return res.data;
  });
}

export function Get_UserrvgGames_fetch(url, firebaseToken, payload, handler) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  axios
    .get(url, { headers: header, params: payload })
    .then((res) => {
      const data = res.data;

      handler(data);
    })
    .catch((error) => {
      console.log(error);
      handler({
        error: true,
        log: "error fetching data, code:1021",
      });
    });
}
