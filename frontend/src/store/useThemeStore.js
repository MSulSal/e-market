import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme-pref") || "night",
  setTheme: (theme) => {
    localStorage.setItem("theme-pref", theme);
    set({ theme });
  },
}));
