import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
var _ = require("lodash");

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
    userSlef_api: {
      lastFetch: 0,
      fetchGap: 60000,
      refreshToken: 0,
    },
    // updated the user self data from the server
    appUserPing: (data, time) => {
      if (data.hasOwnProperty("name")) {
        const old = get().userSelf;
        set((state) => {
          state.userSelf = { ...old, ...data };
          if (time) {
            state.userSlef_api.lastFetch = time;
          }
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
    listSapreeGames: {
      cache: [],
      addMore: (data) => {
        set((state) => {
          state.listSapreeGames.cache = data;
        });
      },
    },
    listSapreeGames_api: {
      lastFetch: 0,
      identifier: "",
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
    setLiveRvgBet: (data) => {
      const betid = data.betid;
      const inArray = get().liveBet;
      const newArray = [...inArray, data];
      set({ liveBet: newArray });
      set({ placedBetOn: betid });
    },
    // -----------------------------------------------------
    // placed order
    // -----------------------------------------------------
    balanceOrder: {
      error: false,
    },
    setBalanceOrder: (data) => {
      if (!data) return;
      set((state) => {
        state.balanceOrder = data;
      });
    },
  }))
);

export default useAppstate;
export { useAppstate };
