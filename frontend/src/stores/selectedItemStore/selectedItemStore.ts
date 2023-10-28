import { create } from "zustand";

type Store = {
  selectedEventId: number | null;
  setSelectedEventId: (eventId: number) => void;
};

export const useSelectedEvent = create<Store>()((set) => ({
  selectedEventId: null,
  setSelectedEventId: (eventId) => set(() => ({ selectedEventId: eventId })),
}));
