import axios from "axios";

// this
export default function Get_UserrvgGameResult_fetcher([
  url,
  firebaseToken,
  data,
  handler,
]) {
  const header = { Authorization: `Bearer ${firebaseToken}` };
  axios
    .post(url, data, { headers: header })
    .then((res) => {
      const data = res.data;
      handler({
        success: true,
        error: false,
      });
    })
    .catch((error) => {
      const res = error.response || {};
      const data = res.data || {};
      const message = data.message || "Error placing order, code:1021";

      handler({
        success: false,
        error: true,
        message: message,
      });
    });
}
