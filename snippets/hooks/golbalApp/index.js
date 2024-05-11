import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useAppstate = create(
  immer((set, get) => ({
    firebaseToken: "",
    setToken: (token) => {
      set({ firebaseToken: token });
    },
    app_sapreeGames: [],
    setAppSapreeGames: (data) => {
      const isArray = Array.isArray(data);
      if (isArray) set({ app_sapreeGames: data });
    },
    userSelf: {},
    // updated the user self data from the server
    appUserHook: (data) => {
      if (data.hasOwnProperty("name")) {
        set({ userSelf: data });
      }
    },

    user_sapreeGamesUnClaimed: [],
    user_sapreeGames: [],
    appSapreeUserGames: (data, claimed) => {
      const isArray = Array.isArray(data);
      if (isArray) {
        if (claimed) {
          set({ user_sapreeGames: data });
        } else {
          set({ user_sapreeGamesUnClaimed: data });
        }
      }
    },
    user_queries: [],
    setUserQueries: (data) => {
      const isArray = Array.isArray(data);
      if (isArray) set({ user_queries: data });
    },
  }))
);

export default useAppstate;
export { useAppstate };
