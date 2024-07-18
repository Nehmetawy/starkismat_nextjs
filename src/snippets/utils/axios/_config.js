const baseUrl = "http://localhost:8080/";

const urlDestro = {
  getUserSelf: "app/user/self",
  postUserRvg: "app/user/newrvg",
  userupdate: "app/user/update",
  userbalance: "app/user/addbalance",
};

export const getApiEndUrl = (name) => {
  const part2 = urlDestro[name] || null;
  if (!part2) return null;
  const full = `${baseUrl}${part2}`;
  return full;
};
