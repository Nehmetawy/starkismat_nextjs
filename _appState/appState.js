import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAppstate = create(
  immer((set, get) => ({
    firebaseToken: "",
    setToken: (token) => {
      set({ firebaseToken: token });
    },
    sapreeGames: [],
    appSapreeGames: (data) => {
      const isArray = Array.isArray(data);
      if (isArray) set({ sapreeGames: data });
    },
    userSelf: {},
    // updated the user self data from the server
    appUserHook: (data) => {
      if (data.hasOwnProperty("name")) {
        set({ userSelf: data });
      }
    },

    userRVGGames: [],
    appSapreeUserGames: (data) => {
      const isArray = Array.isArray(data);
      if (isArray) set({ userRVGGames: data });
    },
  }))
);
