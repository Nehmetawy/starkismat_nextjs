import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useAppstate = create(
  immer((set, get) => ({
    firebaseToken: "",
    setToken: (token) => {
      set({ firebaseToken: token });
    },

    // -----------------------------------------------------
    // user
    // -----------------------------------------------------
    userSelf: {},
    userLastFetch: 0,
    // updated the user self data from the server
    appUserHook: (data, time) => {
      if (data.hasOwnProperty("Name")) {
        const old = get().userSelf;
        set((state) => {
          state.userSelf = { ...old, ...data };
          state.userLastFetch = time;
        });
      }
    },
    userBalanceChange: (amount) => {
      if (amount && typeof amount === "number") {
        const user = get().userSelf;
        const currentBalance = user.Balance;
        const newBalance = currentBalance - amount;
        set((state) => {
          state.userSelf.Balance = newBalance;
        });
      }
    },

    // -----------------------------------------------------
    // app sapree games list
    // -----------------------------------------------------
    app_sapreeGames: [],
    sapreeLastFetch: 0,
    setAppSapreeGames: (data, time) => {
      const isArray = Array.isArray(data);
      if (isArray) {
        set((state) => {
          state.app_sapreeGames = data;
          state.sapreeLastFetch = time;
        });
      }
    },

    // -----------------------------------------------------
    // user sapree game list
    // -----------------------------------------------------
    user_sapreeGamesUnClaimed: [],
    user_sapreeGames: [],
    userSapreeLastFetch: 0,
    appSapreeUserGames: (data, claimed, time) => {
      const isArray = Array.isArray(data);
      if (isArray) {
        set({ userSapreeLastFetch: time });
        if (claimed) {
          set({ user_sapreeGames: data });
        } else {
          set({ user_sapreeGamesUnClaimed: data });
        }
      }
    },
    currentClaiming: "",
    claimLoading: false,
    // -----------------------------------------------------
    // user queries list
    // -----------------------------------------------------
    user_queries: [],
    setUserQueries: (data) => {
      const isArray = Array.isArray(data);
      if (isArray) set({ user_queries: data });
    },

    // -----------------------------------------------------
    //live sapree game
    // -----------------------------------------------------
    liveBet: [
      {
        betid: 1254551,
        amount: 45,
        id: 1225,
        onid: 1,
      },
    ],
    placedBetOn: "",
    setLiveBet: (data) => {
      const betid = data.betid;
      const inArray = get().liveBet;
      const newArray = [...inArray, data];
      set({ liveBet: newArray });
      set({ placedBetOn: betid });
    },
  }))
);

export default useAppstate;
export { useAppstate };
