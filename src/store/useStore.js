import { create } from "zustand";

const useThreeStore = create((set) => ({
  containerRef: null,
  setContainerRef: (ref) => set({ containerRef: ref }),
}));

export default useThreeStore;
