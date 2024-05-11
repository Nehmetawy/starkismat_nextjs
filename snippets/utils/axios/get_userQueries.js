import axios from "axios";

// this
export default function Get_userQueries_fetcher([url, firebaseToken]) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  return axios.get(url, { headers: header }).then((res) => {
    return res.data;
  });
}
