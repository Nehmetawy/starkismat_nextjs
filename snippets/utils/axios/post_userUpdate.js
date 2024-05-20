import axios from "axios";

export const POST_USER_PROFILE_UPDATE = (url, data, token, handler) => {
  const header = { Authorization: `Bearer ${token}` };

  axios
    .post(url, data, { headers: header })
    .then((res) => {
      const data = res.data;
      handler(data);
    })
    .catch((error) => {
      const res = error.response || {};
      const data = res.data || {};
      const message = data.message || "Error updating profile, code:1024";
      handler({
        success: false,
        error: true,
        log: message,
      });
    });
};
