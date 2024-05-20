const baseUrl = "http://localhost:8080/";

const urlDestro = {
  postSapreeBet: "games/sapree/post",
  getSapreeResult: "user/games/sapree/result",
  getSapreeGames: "games/sapree/get",
  getUserSapreeGames: "user/games/sapree/get",
  getUserQueries: "user/queries/get",
  getUserSelf: "user/self/get",
  postProfileUpdate: "user/profile/post",

  claimSapreeBet: "user/games/sapree/claim",
};

export const getUrl = (name) => {
  const part2 = urlDestro[name] || null;
  if (!part2) return null;
  const full = `${baseUrl}${part2}`;
  return full;
};
