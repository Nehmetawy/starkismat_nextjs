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
