import axios from "axios";

export const POST_GAME_RVG = (url, data, firebaseToken, handler) => {
  const header = { Authorization: `Bearer ${firebaseToken}` };

  axios
    .post(url, data, { headers: header })
    .then(() => {
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
};
