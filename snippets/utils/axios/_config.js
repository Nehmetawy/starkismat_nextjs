const baseUrl = "http://localhost:8080/";

const urlDestro = {
  postSapreeBet: "user/games/sapree/post",
  getSapreeGames: "app/games/sapree/get",
  getUserSapreeGames: "user/games/sapree/get",
  getUserQueries: "user/queries/get",
};

export const getUrl = (name) => {
  const part2 = urlDestro[name] || null;
  if (!part2) return null;
  const full = `${baseUrl}${part2}`;
  return full;
};
