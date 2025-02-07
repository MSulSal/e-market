import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme-pref") || "luxury",
  setTheme: (theme) => {
    localStorage.setItem("theme-pref", theme);
    set({ theme });
  },
}));
