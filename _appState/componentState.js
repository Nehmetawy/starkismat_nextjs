import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUIstate = create(
  immer((set, get) => ({
    // rvg_bet form
    issapreeformopen: false,
    selectedsapreebutton: true,
    togglesapreeform: (num, bool) => {
      set((state) => {
        if (num) {
          state.selectedsapreebutton = num;
          state.issapreeformopen = true;
        }
        if (bool) {
          const newToggle = get().issapreeformopen;
          state.issapreeformopen = !newToggle;
        }
      });
    },
    // previous bet result
  }))
);
