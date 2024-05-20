import axios from "axios";

export const CLAIM_USER_RVG = (url, data, firebaseToken, handler) => {
  const header = { Authorization: `Bearer ${firebaseToken}` };

  axios
    .post(url, data, { headers: header })
    .then((res) => {
      const newdata = res.data;
      handler(newdata);
    })
    .catch((error) => {
      const res = error.response || {};
      const data = res.data || {};
      const message = data.message || "Error placing order, code:1021";
      handler({
        success: false,
        error: true,
        log: message,
      });
    });
};
