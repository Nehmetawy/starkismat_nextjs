import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAppUIState = create(
  immer((set, get) => ({
    // rvg_bet form
    issapreeformopen: false,
    selectedsapreebutton: 1,
    togglesapreeform: (num, bool) => {
      set((state) => {
        if (typeof num === "number" || num) {
          state.selectedsapreebutton = num;
          state.issapreeformopen = true;
        }
        if (bool) {
          const newToggle = get().issapreeformopen;
          state.issapreeformopen = !newToggle;
        }
      });
    },
    // ---------------------------------------
    // bottom navigation
    // ---------------------------------------
    lastGamePath: "sapree",
    setLastGamePath: (path) => {
      set({ lastGamePath: path });
    },
    // ---------------------------------------
    // list navigations
    // ---------------------------------------
    selectedListId: "user_sapree",
    setSelectedListId: (id) => {
      if (typeof id === "string") {
        set({ selectedListId: id });
      }
    },
  }))
);
